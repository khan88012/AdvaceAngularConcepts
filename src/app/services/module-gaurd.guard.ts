import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleGaurdGuard implements CanLoad {
    userRole = 'admin'
    // userRole ='user'
    constructor(private router : Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userRole !=='admin')
      {
        this.router.navigate(['access-denied']);
      }
    return true;
  }
}
