import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  section = 'country';
  countriesObservable! : Observable<string[]>;
  statusPromise! : Promise<boolean>;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }
  getCountries()
  {
    this.section = 'country';
    //we assigned the observable itself to the 'countriesObservable' variable and async pipe on the template can subscribe to this on its own
    this.countriesObservable = this.dataService.getCountries();
  }

  getStatus()
  {
    this.section = 'status';
    //we assigned the promise itself to the 'statusPromise' variable and async pipe on the template can resolve this on its own
    this.statusPromise = this.dataService.getStatus();

  }
}
