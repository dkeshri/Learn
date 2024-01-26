import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { AppConfig } from '../models/app-config.model';

@Injectable({
  providedIn: 'root'
})
export class LoadAppConfigJsonService extends AppConfig {


  constructor(private apiService: ApiService) {
    super();
  }
  load() {
    let configFile = "assets/config/config.json";
    return this.apiService.get<AppConfig>(configFile)
      .subscribe((data)=>{
        this.githubEndPoint = data.githubEndPoint;
        this.githubToken = data.githubToken;
        this.version = data.version;
        this.branch = data.branch;
        this.contentDir = data.contentDir;
      });
  }
  
}
