import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.css'],
})
export class SimpleObservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const myObservable: Observable<number> = from([1,2,3]);   

    myObservable.subscribe(
      value => {
          console.log('values ', value);
      }
      
    );
  }
}
