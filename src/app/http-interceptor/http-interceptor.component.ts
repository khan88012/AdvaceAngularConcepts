import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css']
})
export class HttpInterceptorComponent implements OnInit {
  mytoken = 'alksjfdsljfkd@#@#jalsfksjlkl'
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  getContact(){
  const headers = new HttpHeaders({Authorization : `Bearer ${this.mytoken}`,'Content-type':'application/json'});

    this.http.get('http://something.com/api/contact' , {headers:headers}).subscribe((res)=>{
      console.log(res);
    });
  }
  getProduct(){
  const headers = new HttpHeaders({Authorization : `Bearer ${this.mytoken}`,'Content-type':'application/json'});

    this.http.get('http://something.com/api/product', {headers: headers}).subscribe((res)=>{
      console.log(res);
    });
  }
  getUser(){
  const headers = new HttpHeaders({Authorization : `Bearer ${this.mytoken}`,'Content-type':'application/json'});

    this.http.get('http://something.com/api/user', {headers: headers}).subscribe((res)=>{
      console.log(res);
    });
  }
}
