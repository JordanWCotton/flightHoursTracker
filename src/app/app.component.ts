import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private myApi: string;
  private myDomain: string;

  constructor () {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: this.myApi,
      authDomain: this.myDomain
    });
  }
}
