import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  count= 0;
  data : number[] =[];
  myObservable : any;
  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable<number[]>((observer)=>{
      setInterval(() =>
      {
        this.count++;
        this.data.push(this.count);
        if(this.count< 5)
        {
          observer.next(this.data)  // next method to emit the data
        }
        else {
          observer.complete(); //completion call back
        }
      },  1000);
    })

  }
  getdata(){
    this.myObservable.subscribe((res : any) => {
      console.log(res);

    })
  }
}
