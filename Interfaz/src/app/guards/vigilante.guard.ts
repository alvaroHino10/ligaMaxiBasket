import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../api-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var val = this.redirect();
    return val;
  }

  redirect(){
    if(!this.authService.loggedIn()){
      alert('No tienes permisos');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  isAuthorized(route: ActivatedRouteSnapshot){
    const roles = ['delegado'];
    const rolesData = route.data.roles;
    const roleMatches = roles.findIndex(role => rolesData.indexOf(role) !== -1);
    var val = (roleMatches < 0) ? false: true;
    return val;
  }
  
}
