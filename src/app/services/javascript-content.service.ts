import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Video } from '../core/models/content.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavascriptContentService {
  file = "assets/contents/javascript.json";

  constructor(private apiService : ApiService) { }
  
  public getAllContent():Observable<Video[]>{
    return this.apiService.get<Video[]>(this.file);
  }
}
