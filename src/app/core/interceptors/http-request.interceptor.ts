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

    if(request.url.indexOf('{owner}') >= 0){
      request = request.clone({
        url: githubEndPoint+request.url,
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    
    return next.handle(request);
  }
}