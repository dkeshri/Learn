import { Injectable } from '@angular/core';
import { JsonContent } from '../core/models/content.model';

@Injectable({
  providedIn: 'root'
})
export class VideoContentService {

  constructor(private josnContent: JsonContent) { }

  public getAllContent():any{
    return this.josnContent;
  }
}
