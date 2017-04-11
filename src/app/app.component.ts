import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private myApi: string;
  private myDomain: string;

  constructor () {}

  ngOnInit() {

  }
}
