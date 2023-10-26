import { Component, OnInit } from '@angular/core';
import { PrimeCalculator } from '../app.prime';

@Component({
  selector: 'app-web-worker-example',
  templateUrl: './web-worker-example.component.html',
  styleUrls: ['./web-worker-example.component.css']
})
export class WebWorkerExampleComponent implements OnInit {
  tenThousandPrimeNormal = 0;
  tenThousandPrimeWebWorker = 0 ;
  constructor() { }

  ngOnInit(): void {
  }
 primeNumbers(){
    this.tenThousandPrimeNormal=0;
    this.tenThousandPrimeNormal = PrimeCalculator.findNthPrimeNumber(10000);
  }

  primeNumberWebWorker(){
    console.log(import.meta.url);
    if(typeof Worker !== 'undefined')
    {
      const worker = new Worker( new URL('.././app.worker', import.meta.url));
      worker.onmessage = ({data}) => {
        console.log(`page got message: ${data}`);
        this.tenThousandPrimeWebWorker = data;
      };
      worker.postMessage(10000);
    }
    else{

    }
  }
}
