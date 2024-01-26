import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { Video } from '../core/models/content.model';
import { GithubService } from './github.service';

@Injectable({
  providedIn: 'root'
})
export class DotnetContentService {
  file = "dotnet.json";
  constructor(private githubService: GithubService) { }

  public getAllContent(): Observable<Video[]> {
    return this.githubService.getContentFromFile(this.file);
  }
}
