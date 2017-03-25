import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class AddFlightService {

  constructor() { }

  logFlightData (myForm: FormGroup) {
    console.log(myForm.value);
  }

}
