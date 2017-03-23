import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  myForm : FormGroup;

  constructor() { 
    this.myForm = new FormGroup ({
      'flightSymbol': new FormControl(),
      'dutySymbol': new FormControl(),
      'hours': new FormControl(),
      'seat': new FormControl()
    })
  }

  seats = [
    'front',
    'back'
  ]

  flightSymbols = [
    'D',
    'N',
    'S'
  ]

  selectionVar: string = '';
  flightOneHours: 0;
  flightTwoHours: 0;
  flightThreeHours: 0;

  onSubmit(form: any) {
    console.log(form);
  }

  onSelection (value: string) {
    this.selectionVar = value;
    console.log(this.selectionVar);
  }



}
