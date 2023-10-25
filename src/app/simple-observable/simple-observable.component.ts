import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.css'],
})
export class SimpleObservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const myObservable: Observable<number> = of(1, 2, 3, 4, 5);

    myObservable.subscribe(
      {
        next: (value) => {
          console.log('values ', value);
        },
        error: (err) => {},
        complete: () => {},
      }
    );
  }
}
