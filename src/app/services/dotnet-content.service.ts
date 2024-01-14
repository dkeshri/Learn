import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { Video } from '../core/models/content.model';

@Injectable({
  providedIn: 'root'
})
export class DotnetContentService {
  file = "assets/contents/dotnet.json";
  constructor(private apiService : ApiService) { }

  public getAllContent():Observable<Video[]>{
    return this.apiService.get<Video[]>(this.file);
  }
}
