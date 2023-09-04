import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  status = 'offline'
  isOnline = false
  constructor() { }

  ngOnInit(): void {
    this.getStatus();
    this.checkLogic();
  }
  getStatus(){
    this.isOnline = true
  }

  checkLogic(){
    if(this.isOnline === false)
    {
      this.status = 'offline'
    }
    else
    {
      this.status = 'online'
    }
  }

}
