import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get<T>(path: string, params?: any,headers?:any): Observable<T> {
    return this.httpClient.get<T>(`${path}`, { observe: 'body', params , headers })
      .pipe(
        catchError(this.handleError)
      );
  }
  post<T>(path: string, body?: any): Observable<T> {
    return this.httpClient.post<T>(`${path}`, body)
      .pipe(
        catchError(this.handleError)
      );;
  }
  delete<T>(path: string): Observable<T> {
    return this.httpClient.delete<T>(`${path}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  put<T>(path: string, body?: any): Observable<T> {
    return this.httpClient.put<T>(`${path}`, body)
      .pipe(
        catchError(this.handleError)
      );;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
