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
      this.forkJoinDataService.getWidgetOneData().subscribe((res) =>
      {
        this.schoolCount = res ;
        this.isSpinnerOne= false;
      }  );
      this.forkJoinDataService.getWidgetTwoData().subscribe((res) =>
      {
        this.HospitalCount = res ;
        this.isSpinnerTwo= false;
      }  );
      this.forkJoinDataService.getWidgetThreeData().subscribe((res) =>
      {
        this.BankCount = res ;
        this.isSpinnerThree= false;
      }  );
  }

}
