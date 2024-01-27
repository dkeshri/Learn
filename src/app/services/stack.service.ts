import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../shared/models/option.model';
import { GithubService } from './github.service';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  private file = 'stack.json';
  constructor(private githubService:GithubService) { }

  public getStackOption() : Observable<Option[]>{
    return this.githubService.getStackFromFile(this.file)
  }
}
