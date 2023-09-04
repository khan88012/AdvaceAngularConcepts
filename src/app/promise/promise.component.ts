import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  status = 'offline'
  isOnline = false
  myPromise : any;
  constructor() { }

  ngOnInit(): void {
    this.getStatus();
    this.myPromise.then((res : any)=>
    {
      console.log(res);
      this.checkLogic();
    },
    (err : any) => {
      console.log(err);
    }
    )

  }
  getStatus(){
    console.log('check status')
    // setTimeout(() => {
    //   console.log('check the received value')
    //   this.isOnline= true
    // }, 3000);

    this.myPromise = new Promise<boolean>((resolve , reject) =>{
      setTimeout(() => {
        console.log('check the received value')
        this.isOnline= true;
        resolve(this.isOnline);
       // reject('there is a db error')  // if there is an error
      }, 3000);
    });

  }

  checkLogic(){
    console.log('check the logic')
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
