import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddFlightService } from '../add-flight.service';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  myForm: FormGroup;
  flightSymbol: string = '**';
  dutySymbol: string = '**';
  seat: string = '**';

  constructor(private addFlight: AddFlightService) { 
    this.myForm = new FormGroup ({
      'myDateSelector':new FormGroup({
        'Date': new FormControl()
      }),
      'flightSymbol': new FormGroup ({
        'D': new FormControl(),
        'N': new FormControl(),
        'S': new FormControl()
      }),
      'dutySymbol': new FormGroup ({
        'PI': new FormControl(),
        'PC': new FormControl(),
        'IP': new FormControl(),
        'SP': new FormControl(),
      }),
      'hours': new FormGroup({
        'flightHours': new FormControl()
      }),
      'seat': new FormGroup ({
        'Front': new FormControl(),
        'Back': new FormControl()
      })
    })
  }

  onSubmit() {
    this.addFlight.logFlightData(this.myForm);
  }


}
