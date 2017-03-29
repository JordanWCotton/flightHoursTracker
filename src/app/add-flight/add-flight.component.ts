import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NG_VALIDATORS } from '@angular/forms';
import { AddFlightService } from '../add-flight.service';
import { Flight } from '../flight.interface';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  public flight: Flight;
  public myForm: FormGroup;

  constructor(private addFlight: AddFlightService, private _fb: FormBuilder) {}

  hours: number = 0.0;
  dateValue: string = '';
  remarksValue: string = '';
  pattern: string = '/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/';

  seats = [
    { value: 'F'},
    { value: 'B'}
  ];

  dutySymbols = [
    { value: 'PI'},
    { value: 'PC'},
    { value: 'IP'},
    { value: 'SP'}
  ];

  flightSymbols = [
    { value: 'D'},
    { value: 'N'},
    { value: 'S'}
  ];

  ngOnInit() {
    this.flight = {
      hours: this.hours,
      remarks: this.remarksValue,
      seat: this.seats[0].value,
      dutySymbol: this.dutySymbols[0].value,
      flightSymbol: this.flightSymbols[0].value
    },

    this.myForm = this._fb.group({
      date: ['', <any>Validators.pattern(this.pattern)]
    })
  }

  //Send the flight data to the add-flight service after checking hours 
  onSubmit(f, dateValue) {
    if (f.value.hours > 9.0) {
      console.log('Hours too high!'); //Develop error throw here
    } else {
      this.addFlight.logFlightData(f);
    }
  }

  //Send the date data to the add-flight service
  onSave(myForm) {
    this.addFlight.logFlightDate(myForm.value.date)
    console.log(myForm);
  }


}
