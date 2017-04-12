import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';
 
@Injectable()
export class AddFlightService {
  
  constructor(private http: Http, private auth: AuthService) {}

  logFlightData (formData) {
    console.log('logFlightData called!');
    return this.http.post('/data/log-flight', formData);
  }

} 
