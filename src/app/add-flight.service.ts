import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class AddFlightService {

  private flightDate: string;
  private flightHours: number;
  private dutySymbol;
  private flightSymbol;
  private remarks;

  constructor() { }

  logFlightDate (dataDate) {
    //Set date
    this.flightDate = dataDate;
  }

  logFlightData (formData) {
    //Set data from flight to private variables
    this.flightHours = formData.value.hours;
    this.dutySymbol = formData.value.dutySymbol;
    this.flightSymbol = formData.value.flightSymbol;
    this.remarks = formData.value.remarks;

    //Simulate passing of variables now private to the service
    console.log(this.flightHours);
    console.log(this.dutySymbol);
    console.log(this.flightSymbol);
    console.log(this.remarks);
    console.log(this.flightDate);

    //Logic to take the 'B', 'F' etc and make it 'Front' and 'Back', repackage and send the new data to 
    //the FireBase server using http 
  }

}
