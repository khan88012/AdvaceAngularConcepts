import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css']
})
export class HttpInterceptorComponent implements OnInit {
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  getContact(){


    this.http.get('http://something.com/api/contact').subscribe((res)=>{
      console.log(res);
    });
  }
  getProduct(){


    this.http.get('http://something.com/api/product').subscribe((res)=>{
      console.log(res);
    });
  }
  getUser(){


    this.http.get('http://something.com/api/user').subscribe((res)=>{
      console.log(res);
    });
  }
}
