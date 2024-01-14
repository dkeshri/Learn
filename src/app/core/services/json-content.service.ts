import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonContent } from '../models/content.model';
import { catchError, throwError } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JsonContentService extends JsonContent {


  constructor(private apiService: ApiService) {
    super();
  }
  load() {
    let contentFile = "assets/contents/contents.json";
    return this.apiService.get<JsonContent>(contentFile)
      .subscribe((data)=>{
        this.subjects = data?.subjects;
      });
  }
  
}
