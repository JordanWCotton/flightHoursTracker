import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddFlightService } from '../add-flight.service';
import { Flight } from '../flight.interface';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  public flight: Flight;

  constructor(private addFlight: AddFlightService) {}

  hours: number = 0.0;
  dateValue: string = '';
  remarksValue: string = '';

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
      date: this.dateValue,
      remarks: this.remarksValue,
      seat: this.seats[0].value,
      dutySymbol: this.dutySymbols[0].value,
      flightSymbol: this.flightSymbols[0].value
    }
  }

  onSubmit(f) {
    this.addFlight.logFlightData(f.value);
  }


}
