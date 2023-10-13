import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData()
  {
     return of('data coming form data service with delay of 3 seconds').pipe(delay(3000));
  }


  getCountries()  {
    return new Observable<string[]>((observer) =>{
      setTimeout(() => {
        observer.next(
          [
            'India', 'USA', 'UK', 'Australia', 'Cananda', 'Singapore', 'Malaysia'
          ]
        );
      }, 2000);
    });
  }

  getStatus() {
    return new Promise<boolean>((resolve, reject) =>{
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }

}
