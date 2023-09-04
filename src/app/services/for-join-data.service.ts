import { Injectable } from '@angular/core';
import { Observable , forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForJoinDataService {

  constructor() { }

  getAllData()
  {
     let observableOneData =  new Observable<number>((observer) => {
      setTimeout(() =>{
        observer.next(23);
        observer.complete();
      }, 5000);
    });
  


    let observableTwoData = new Observable<number>((observer) => {
      setTimeout(() =>{
        observer.next(50);
        observer.complete();
      }, 3000);
    });
 


    let observableThreeData = new Observable<number>((observer) => {
      setTimeout(() =>{
        observer.next(14);
        observer.complete();
      }, 2000);
    });

    return forkJoin([ observableOneData , observableTwoData, observableThreeData]);

}
}
