import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 //userRole = 'admin';

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  goToHome(){
    this.route.navigate(['/home']);
  }
  goToProducts(){

  }
  goToAbout()
  {
    this.route.navigate(['/about']);

  }
  goToContact(){
  }
  goToOffers(){
    this.route.navigate(['/offers']);

  }
  goToAdmin(){
    this.route.navigate(['/admin']);

  }
}
