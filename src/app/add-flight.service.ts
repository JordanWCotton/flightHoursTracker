import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';
 
@Injectable()
export class AddFlightService {
  private flightData = {
    flightOne: {
      date: '',
      hours: 0,
      remarks: '',
      flightSymbol: '',
      dutySymbol: '',
      seat: ''
    },
    flightTwo: {
      date: '',
      hours: 0,
      remarks: '',
      flightSymbol: '',
      dutySymbol: '',
      seat: ''
    },
    flightThree: {
      date: '',
      hours: 0,
      remarks: '', 
      flightSymbol: '',
      dutySymbol: '',
      seat: ''
    },
    secondFlight: false,
    thirdFlight: false
  }

  constructor(private http: Http, private auth: AuthService) {}

  logFlightData (formData) {
    this.flightData.flightOne.date = formData.date;
    this.flightData.flightOne.hours = formData.hoursOne;
    this.flightData.flightOne.remarks = formData.remarks;
    this.flightData.flightOne.flightSymbol = formData.flightSymbolOne;
    this.flightData.flightOne.dutySymbol = formData.dutySymbolOne;
    this.flightData.flightOne.seat = formData.seatOne;

    if (formData.flightSymbolTwo !== '---') {
      this.flightData.flightTwo.date = formData.date;
      this.flightData.flightTwo.hours = formData.hoursTwo;
      this.flightData.flightTwo.remarks = formData.remarks;
      this.flightData.flightTwo.flightSymbol = formData.flightSymbolTwo;
      this.flightData.flightTwo.dutySymbol = formData.dutySymbolTwo;
      this.flightData.flightTwo.seat = formData.seatTwo;
      
      this.flightData.secondFlight = true;
    }

    

    if (formData.flightSymbolThree !== '---') {
      this.flightData.flightThree.date = formData.date;
      this.flightData.flightThree.hours = formData.hoursThree;
      this.flightData.flightThree.remarks = formData.remarks;
      this.flightData.flightThree.flightSymbol = formData.flightSymbolThree;
      this.flightData.flightThree.dutySymbol = formData.dutySymbolThree;
      this.flightData.flightThree.seat = formData.seatThree;

      this.flightData.thirdFlight = true;
    }
    return this.http.post('/data/log-flight', this.flightData);
  }

  sortFlightData (formData) {
    
  }

} 