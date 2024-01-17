import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private apiservice:ApiService) { }

  public getCommitList(){
    let token = '';
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + token);
    return this.apiservice.get('https://api.github.com/repos/dkeshri/Learn/commits');
  }
}
