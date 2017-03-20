import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {

  constructor() { }

  selectionVar: string = '';
  hourValue = 1.2;

  onHourSelection (value) {
    this.hourValue = value;
    console.log(this.hourValue)
  }

  onSelection (value: string) {
    this.selectionVar = value;
    console.log(this.selectionVar);
  }



}
