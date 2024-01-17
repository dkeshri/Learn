import { ConfigurationService } from '../services/configuration.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private configurationService:ConfigurationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let githubEndPoint = this.configurationService.getGithubEndpoint();
    let token = this.configurationService.getGithubToken();
    let owner = 'dkeshri';
    let repo = 'Learn';

    if(request.url.indexOf('{owner}') >= 0){
      let url = request.url;
      request = request.clone({
        url: githubEndPoint+this.ReplaceReqUrl(url,owner,repo),
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    
    return next.handle(request);
  }

  private ReplaceReqUrl(url:string, owner:string, repo:string){
    let newUrl = url.replace('{owner}',owner).replace('{repo}',repo);
    return newUrl;
  }
}