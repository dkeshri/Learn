import { Injectable } from '@angular/core';
import { AppConfig } from '../models/app-config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private appConfig: AppConfig) { }

  getGithubEndpoint():string{
    return this.appConfig.githubEndPoint;
  }

  getGithubToken():string{
    return this.appConfig.githubToken;
  }
  getBranch():string{
    return this.appConfig.branch;
  }
  getContentDir():string{
    return this.appConfig.contentDir;
  }
  getOwner(){
    return this.appConfig.owner;
  }
  getRepo(){
    return this.appConfig.repo;
  }
}
