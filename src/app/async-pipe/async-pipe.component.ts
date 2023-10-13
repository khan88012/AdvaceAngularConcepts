import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  countries: string[] =[];
  status = false;
  section = 'country';
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  getCountries()
  {
    this.section = 'country';
    //without async pipe on the view(html) we have to subscribe to the observable provided by getCountries method of dataService
    this.dataService.getCountries().subscribe((res : string[]) =>{
      this.countries = res;
    });
  }

  getStatus()
  {
    this.section = 'status';
    this.status = false;
    //without async pipe on the view(html) we have to resolve the promise provide by getStatus method of dataService

    this.dataService.getStatus().then((res: boolean) =>{
      this.status = res;
    })

  }
}
