import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  myForm: FormGroup;

  constructor() { 
    this.myForm = new FormGroup ({
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
    console.log(this.myForm.value);
  }


}
