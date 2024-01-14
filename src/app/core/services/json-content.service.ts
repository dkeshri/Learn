import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonContent } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class JsonContentService extends JsonContent{

  constructor(private http: HttpClient) {
    super();
  }
  load() {
    let contentFile = "assets/contents/contents.json";
    return this.http.get<JsonContent>(contentFile)
      .toPromise()
      .then(data => {
        this.subjects = data?.subjects;
      })
      .catch(() => {
        console.error('Could not load content file');
      });
  }
}
