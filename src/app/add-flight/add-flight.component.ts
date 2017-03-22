import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {

  constructor() { }

  selectionVar: string = '';
  flightOneHours: 0;
  flightTwoHours: 0;
  flightThreeHours: 0;

  onSelection (value: string) {
    this.selectionVar = value;
    console.log(this.selectionVar);
  }



}
