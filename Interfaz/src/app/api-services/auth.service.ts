import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url;
  constructor(private http: HttpClient) { }

  signUp(user) {
    return this.http.post<any>(`${this.url}signup`, user);
  }

  singIn(user) {
    return this.http.post<any>(`${this.url}signin`, user);
  }

  loggedIn() {
    if (sessionStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

function catchError(handleError: (error: HttpErrorResponse) => Observable<never>): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error("Function not implemented.");
}
