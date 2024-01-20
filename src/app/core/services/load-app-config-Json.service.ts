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
    let contentFile = "assets/contents/contents.json";
    return this.apiService.get<AppConfig>(contentFile)
      .subscribe((data)=>{
        
      });
  }
  
}
