import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  hightLightThisNumber : number = 10;
  divisibleBy: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
