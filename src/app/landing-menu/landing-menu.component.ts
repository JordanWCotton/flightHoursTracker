import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-landing-menu',
  templateUrl: './landing-menu.component.html',
  styleUrls: ['./landing-menu.component.css']
})
export class LandingMenuComponent implements OnInit {
  private myApi: string;
  private myDomain: string;
  
  constructor() { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: this.myApi,
      authDomain: this.myDomain
    });
  }

}
