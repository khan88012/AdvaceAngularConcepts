import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numbers = [0,1,2,3,4,5,6,7,8];
}
