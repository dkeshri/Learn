import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  getGithubEndpoint():string{
    return 'https://api.github.com';
  }

  getGithubToken():string{
    return '';
  }
}
