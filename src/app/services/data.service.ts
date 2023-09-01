import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData()
  {
     return of('data coming form data service with delay of 3 seconds').pipe(delay(3000));
  }
}
