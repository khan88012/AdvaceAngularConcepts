import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//can activate gaurd allows us to restrict access to particular component with a condtion
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // userRole = 'admin'
  userRole ='user'
  constructor(private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userRole !=='admin')
      {
        this.router.navigate(['access-denied']);
      }
    return true;
  }
  
}
