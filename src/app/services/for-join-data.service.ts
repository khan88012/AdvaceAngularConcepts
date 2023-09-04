import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForJoinDataService {

  constructor() { }

  getWidgetOneData()
  {
    return new Observable<number>((observer) => {
      setTimeout(() =>{
        observer.next(23);
        observer.complete();
      }, 5000);
    });
  }

  getWidgetTwoData()
  {
    return new Observable<number>((observer) => {
      setTimeout(() =>{
        observer.next(50);
        observer.complete();
      }, 3000);
    });
  }

  getWidgetThreeData()
  {
    return new Observable<number>((observer) => {
      setTimeout(() =>{
        observer.next(14);
        observer.complete();
      }, 2000);
    });
  }
}
