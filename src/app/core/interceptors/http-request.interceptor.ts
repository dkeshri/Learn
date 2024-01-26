import { ConfigurationService } from '../services/configuration.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { AppConstant } from '../models/app-constant';


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private configurationService:ConfigurationService,
    private localStorageService:LocalStorageService) {
    }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let githubEndPoint = this.configurationService.getGithubEndpoint();
    let token = this.configurationService.getGithubToken();
    let owner = this.configurationService.getOwner();
    let repo = this.configurationService.getRepo();

    if(request.url.indexOf('{owner}') >= 0){
      let url = request.url;
      let passKey = this.localStorageService.get(AppConstant.PASSKEY);
      let keys = this.parsePassKey(passKey);
      if(keys){
        token = keys[0] + token + keys[1];
      }
      request = request.clone({
        url: githubEndPoint+this.ReplaceReqUrl(url,owner,repo),
        headers: request.headers.set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/vnd.github+json')
      });
    }
    return next.handle(request);
  }

  private ReplaceReqUrl(url:string, owner:string, repo:string){
    let newUrl = url.replace('{owner}',owner).replace('{repo}',repo);
    return newUrl;
  }
  private parsePassKey(value:string | null){
    let keys = [] as string[];
    if(value){
      keys.push(value.slice(0, 3));
      keys.push(value.slice(3));
      return keys;
    }
    return null;
  }
}