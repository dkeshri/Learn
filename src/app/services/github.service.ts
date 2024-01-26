import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { AppConstant } from '../core/models/app-constant';
import { Topic } from '../views/Models/topic-model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private apiservice:ApiService,
    private localStorageService:LocalStorageService
    ) { }

  public getCommitList(token:string){
    this.localStorageService.set(AppConstant.PASSKEY,token);
    return this.apiservice.get('/repos/{owner}/{repo}/commits');
  }
  public saveTopic(topic:Topic){
    this.localStorageService.set(AppConstant.PASSKEY,topic.token);
    let filePath = 'src/filename';
    return this.apiservice.get('/repos/{owner}/{repo}/contents/'+filePath);
  }

  public testApi(){
    return this.apiservice.get('/repos/{owner}/{repo}/contents/assets/contents/other.json?ref=gh-pages');
  }
  public getRootContentByBranchName(branchName?:string){
    if(!branchName){
      branchName = 'master';
    }
    return this.apiservice.get('/repos/{owner}/{repo}/contents?ref='+branchName);
  }
}
