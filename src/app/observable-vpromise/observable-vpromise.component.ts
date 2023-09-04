import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observable-vpromise',
  templateUrl: './observable-vpromise.component.html',
  styleUrls: ['./observable-vpromise.component.css']
})
export class ObservableVpromiseComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }
  goToObservable(){
    this.router.navigate(['/observable']);
  }
  gotToPromise(){
    this.router.navigate(['/promise']);

  }
}
