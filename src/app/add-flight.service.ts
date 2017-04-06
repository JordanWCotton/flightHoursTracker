import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';

@Injectable()
export class AddFlightService {
  
  constructor(private http: Http) {}


  logFlightData (formData) {
    return this.http.post('https://logit-5e725.firebaseio.com/flightData.json', formData.value);
  }

}
