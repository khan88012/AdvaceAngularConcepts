import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  receivedData =''
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((res)=>
    {
      this.receivedData = res;
    }
    )
    //if we do not use resolve guard we will navigate to products page without the data in hand. So if requirement is like we should have 
    // data before we move to another component then we use resolve guard 
  }

}
