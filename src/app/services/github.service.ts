import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { AppConstant } from '../core/models/app-constant';

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
}
