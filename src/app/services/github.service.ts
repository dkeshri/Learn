import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { AppConstant } from '../core/models/app-constant';
import { Topic } from '../views/Models/topic-model';
import { HttpParams } from '@angular/common/http';
import { GitCommitFile, GitCommitter, GithubFile } from '../views/Models/github-file-model';
import { Video } from '../core/models/content.model';
import { ConfigurationService } from '../core/services/configuration.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private repoUrl = '/repos/{owner}/{repo}';
  private appContentDir = '/assets/contents';
  private branchName = 'gh-pages';
  constructor(
    private apiservice:ApiService,
    private localStorageService:LocalStorageService,
    private configurationService:ConfigurationService
    ) { 
      this.branchName = configurationService.getBranch();
      this.appContentDir = configurationService.getContentDir();
    }

  public getCommitList(token:string){
    this.localStorageService.set(AppConstant.PASSKEY,token);
    return this.apiservice.get(`${this.repoUrl}/commits`);
  }
  public saveTopic(topic:Topic,fileName:string){
    this.localStorageService.set(AppConstant.PASSKEY,topic.token);
  }

  public getAssetFileDetails(fileName:string){
    let params = new HttpParams();
    params = params.append('ref', this.branchName);
    let path = `${this.repoUrl}/contents${this.appContentDir}/${fileName}`; 
    return this.apiservice.get<GithubFile>(path,params);
  }

  public getContentFromFile(fileName:string) : Observable<Video[]>{
    return this.getAssetFileDetails(fileName).pipe(
      map((data) => {
        let content = atob(data.content);
        return JSON.parse(content) as Video[];
      }));
  }

  public saveAssetFileContent(fileName:string,fileContent:string,fileSha:string,token:string){
    this.setPassKey(token);
    let params = new HttpParams();
    params = params.append('ref', this.branchName);
    let path = `${this.repoUrl}/contents${this.appContentDir}/${fileName}`;
    let user = { name: 'Deepak Keshri', email:'dkeshridev@gmail.com'} as GitCommitter;
    let content = btoa(fileContent);
    let file = {} as GitCommitFile;
    file.message = "Save by App";
    file.committer = user;
    file.content = content;
    file.sha = fileSha;
    file.branch = this.branchName;
    return this.apiservice.put(path,file);
  }
  public getRootContentByBranchName(branchName?:string){
    if(!branchName){
      branchName = 'master';
    }
    return this.apiservice.get('/repos/{owner}/{repo}/contents?ref='+branchName);
  }
  private setPassKey(token:string){
    this.localStorageService.set(AppConstant.PASSKEY,token);
  }
}
