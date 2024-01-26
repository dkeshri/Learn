import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Observable } from 'rxjs';
import { Video } from '../core/models/content.model';
import { GithubService } from './github.service';

@Injectable({
  providedIn: 'root'
})
export class OtherContentService {

  file = "other.json";
  constructor(private githubService: GithubService) { }

  public getAllContent(): Observable<Video[]> {
    return this.githubService.getContentFromFile(this.file);
  }
}
