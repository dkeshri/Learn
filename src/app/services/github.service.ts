import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { AppConstant } from '../core/models/app-constant';
import { Topic } from '../views/Models/topic-model';
import { HttpParams } from '@angular/common/http';
import { GitCommitFile, GitCommitter, GithubFile } from '../views/Models/github-file-model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private repoUrl = '/repos/{owner}/{repo}';
  private appContentDir = '/assets/contents';
  private branchName = 'gh-pages';
  constructor(
    private apiservice:ApiService,
    private localStorageService:LocalStorageService
    ) { }

  public getCommitList(token:string){
    this.localStorageService.set(AppConstant.PASSKEY,token);
    return this.apiservice.get(`${this.repoUrl}/commits`);
  }
  public saveTopic(topic:Topic){
    this.localStorageService.set(AppConstant.PASSKEY,topic.token);
    let filePath = 'src/filename';
    return this.apiservice.get('/repos/{owner}/{repo}/contents/'+filePath);
  }

  public getAssetFileContent(fileName:string){
    let params = new HttpParams();
    params = params.append('ref', this.branchName);
    let path = `${this.repoUrl}/contents${this.appContentDir}/${fileName}`;
    
    return this.apiservice.get<GithubFile>(path,params);
  }
  public saveAssetFileContent(fileName:string,fileContent:string,fileSha:string){
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
    return this.apiservice.put(path,file);
  }
  public getRootContentByBranchName(branchName?:string){
    if(!branchName){
      branchName = 'master';
    }
    return this.apiservice.get('/repos/{owner}/{repo}/contents?ref='+branchName);
  }
}
