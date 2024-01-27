import { Injectable } from '@angular/core';
import { GithubService } from './github.service';
import { Observable, map } from 'rxjs';
import { Video } from '../core/models/content.model';
import { GithubFile } from '../views/Models/github-file-model';

@Injectable({
  providedIn: 'root'
})
export class VideoContentService {

  constructor(private githubService: GithubService) { }

  public getAllContent(file:string): Observable<Video[]> {
    return this.githubService.getContentFromFile(file);
  }

  public getAllFilesName(): Observable<string[]> {
    return this.githubService.getAllFileinContentDir().pipe(
      map((data: GithubFile[]) => {
        return data.map(element => {
          return element.name;
        });
      }));
  }
}
