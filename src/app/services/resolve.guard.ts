import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
//lets you are getting data from backe
@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<string> {

  constructor(private dataService : DataService){}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
        
    return this.dataService.getData();
  }
  
}
