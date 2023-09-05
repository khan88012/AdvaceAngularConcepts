import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  mytoken = 'alksjfdsljfkd@#@#jalsfksjlkl'

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenizedReq = request.clone(
      {
        setHeaders : {
          'Content-Type':'application/json',
           Authorization : `Bearer ${this.mytoken}`
        }
      }
    )
    return next.handle(tokenizedReq);
    // return next.handle(tokenizedReq).pipe(retry(2)); //with interceptor we can retry the request multiple times retry is RXjs operator

  }
}
