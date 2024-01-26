import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Video } from '../core/models/content.model';
import { Observable, map } from 'rxjs';
import { GithubService } from './github.service';

@Injectable({
  providedIn: 'root'
})
export class JavascriptContentService {
  file = "javascript.json";

  constructor(private githubService: GithubService) { }

  public getAllContent(): Observable<Video[]> {
    return this.githubService.getContentFromFile(this.file);
  }
}
