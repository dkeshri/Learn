import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { HttpParams } from '@angular/common/http';
import { GitCommitFile, GitCommitter, GithubFile } from '../views/Models/github-file-model';
import { Video } from '../core/models/content.model';
import { ConfigurationService } from '../core/services/configuration.service';
import { Observable, map } from 'rxjs';
import { Option } from '../shared/models/option.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private repoUrl = '/repos/{owner}/{repo}';
  private appContentDir = '/assets/contents';
  private branchName = 'gh-pages';
  private appConfigDir = '/assets/config';
  constructor(
    private apiservice: ApiService,
    private localStorageService: LocalStorageService,
    private configurationService: ConfigurationService
  ) {
    this.branchName = configurationService.getBranch();
    this.appContentDir = configurationService.getContentDir();
  }

  private getFileDetails(fileName: string, contentDir: string) {
    let params = new HttpParams();
    params = params.append('ref', this.branchName);
    let path = `${this.repoUrl}/contents${contentDir}/${fileName}`;
    return this.apiservice.get<GithubFile>(path, params);
  }

  private saveFileContent(fileName: string, fileDir: string, fileContent: string, fileSha: string) {
    let params = new HttpParams();
    params = params.append('ref', this.branchName);
    let path = `${this.repoUrl}/contents${fileDir}/${fileName}`;
    let user = { name: 'Deepak Keshri', email: 'dkeshridev@gmail.com' } as GitCommitter;
    let content = btoa(fileContent);
    let file = {} as GitCommitFile;
    file.message = "Save by App";
    file.committer = user;
    file.content = content;
    file.sha = fileSha;
    file.branch = this.branchName;
    return this.apiservice.put(path, file);
  }

  public getAssetFileDetails(fileName: string) {
    return this.getFileDetails(fileName, this.appContentDir);
  }

  public getContentFromFile(fileName: string): Observable<Video[]> {
    return this.getFileDetails(fileName, this.appContentDir).pipe(
      map((data) => {
        let content = atob(data.content);
        return JSON.parse(content) as Video[];
      }));
  }

  public getStackFromFile(fileName: string) {
    return this.getFileDetails(fileName, this.appConfigDir).pipe(
      map((data) => {
        let content = atob(data.content);
        return JSON.parse(content) as Option[];
      }));
  }

  public saveAssetFileContent(fileName: string, fileContent: string, fileSha: string) {
    return this.saveFileContent(fileName, this.appContentDir, fileContent, fileSha);
  }

}
