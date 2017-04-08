import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class AddFlightService {
  
  constructor(private http: Http, private auth: AuthService) {}


  logFlightData (formData) {
    const token: string = this.auth.getUserToken();
    return this.http.post('https://logit-5e725.firebaseio.com/flightData.json?auth=' + token,
     formData.value);
  }

}
