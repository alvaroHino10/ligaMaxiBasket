import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url;
  constructor(private http: HttpClient) { }

  signUp(user) {
    return this.http.post<any>(`${this.url}/signup`, user);
  }

  singIn(user) {
    return this.http.post<any>(`${this.url}/signin`, user);
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

}
