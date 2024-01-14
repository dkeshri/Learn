import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Observable } from 'rxjs';
import { Video } from '../core/models/content.model';

@Injectable({
  providedIn: 'root'
})
export class OtherContentService {

  file = "assets/contents/other.json";
  constructor(private apiService : ApiService) { }

  public getAllContent():Observable<Video[]>{
    return this.apiService.get<Video[]>(this.file);
  }
}
