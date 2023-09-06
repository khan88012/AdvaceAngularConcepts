import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activated-route-v-activated-route-snapshot',
  templateUrl: './activated-route-v-activated-route-snapshot.component.html',
  styleUrls: ['./activated-route-v-activated-route-snapshot.component.css']
})
export class ActivatedRouteVActivatedRouteSnapshotComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  goToUser(k:number){
    this.router.navigate([`/user/${k}`]);
  }
  goToOffice(){
    this.router.navigate(['/office']);
  }
}
