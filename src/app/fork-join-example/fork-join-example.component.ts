import { Component, OnInit } from '@angular/core';
import { ForJoinDataService } from '../services/for-join-data.service';

@Component({
  selector: 'app-fork-join-example',
  templateUrl: './fork-join-example.component.html',
  styleUrls: ['./fork-join-example.component.css']
})
export class ForkJoinExampleComponent implements OnInit {
  isSpinnerOne = false
  isSpinnerTwo = false
  isSpinnerThree = false
  schoolCount = 0
  HospitalCount= 0
  BankCount= 0
  constructor( private forkJoinDataService : ForJoinDataService) { }

  ngOnInit(): void {
    this.isSpinnerOne = true;
    this.isSpinnerTwo = true;
    this.isSpinnerThree = true;
    this.getData();

  }
  getData()
  {
      this.forkJoinDataService.getAllData().subscribe((res) =>
      {
        this.schoolCount = res[0] ;
        this.isSpinnerOne= false;
        this.HospitalCount = res[1];
        this.isSpinnerTwo = false;
        this.BankCount = res[2];
        this.isSpinnerThree = false;
      }  );
  
  }

}
