import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {
  tokenID: any;
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let request = req;
    if (this.authService.loggedIn()) {
      const token: string = this.authService.getToken();
      if (token) {
        request = req.clone({
          setHeaders: {
            //Autorizaciòn de tipo Bearer + token
            Authorization: `Bearer ${token}`
          }
        });
        //console.log(request);
      }
    }
    return next.handle(request);
  }
}
