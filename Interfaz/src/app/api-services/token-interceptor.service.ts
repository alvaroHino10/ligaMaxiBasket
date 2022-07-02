import { Injectable , Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroFormDelegadoComponent } from '../modules/registro-delegado/registro-form-delegado/registro-form-delegado.component';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
    
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let delegado = this.injector.get(RegistroFormDelegadoComponent);
    let tokenizedRequest = req.clone({      
      setHeaders: {
        Authorization: `Bearer ${delegado.getToken()}`// xx.yy.zz'
        //                      JSON web token
      }
    });

    return next.handle(tokenizedRequest);
  }

  
}
