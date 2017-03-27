import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class AddFlightService {

  constructor() { }

  logFlightData (formData) {
    console.log(formData);

    //Logic to take the 'B', 'F' etc and make it 'Front' and 'Back', repackadge and send the new data to 
    //the FireBase server using http 
  }

}
