import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NG_VALIDATORS } from '@angular/forms';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Response } from '@angular/http';

import { AddFlightService } from '../add-flight.service';
import { Flight } from '../flight.interface';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  //Bind elements to local variables
  @ViewChild('elFlight') elFlight:ElementRef;
  @ViewChild('elDuty') elDuty:ElementRef;
  @ViewChild('elSeat') elSeat:ElementRef;
  @ViewChild('openModalButton') openModal:ElementRef;

  public flight: Flight;
  public myForm: FormGroup;
  public date: DateModel;
  public options: DatePickerOptions;
  public todayDate = new Date();
  public hours: number;
  public remarksValue: string = '';

  constructor(private addFlight: AddFlightService, private _fb: FormBuilder, private rd: Renderer2) {
    this.options = new DatePickerOptions ({
      initialDate: this.todayDate
    });
  }

  //Regex pattern that matches MM/DD/YYYY, from 1900-2099
  hoursPattern = /^-?\d*\.?\d+$/;

  //Static values for our user input menus
  seats = [
    { value: 'Front'},
    { value: 'Back'}
  ];

  dutySymbols = [
    { value: 'PI'},
    { value: 'PC'},
    { value: 'IP'},
    { value: 'SP'}
  ];

  flightSymbols = [
    { value: 'Day'},
    { value: 'Night'},
    { value: 'Sim'},
    { value: 'NVS'},
    { value: 'NVG'},
    { value: 'NVD'},
    { value: 'Hood'},
    { value: 'Wx'}
  ];

  ngOnInit() {
    //On initialization, set all the values to default
    this.initializeForm();
  }

  //Template driven form for static data handling
  initializeForm() {
    this.flight = {
      date: this.date,
      hours: this.hours, //Force user inputted values to be a float, with 1 decimal place
      remarks: this.remarksValue,
      seat: this.seats[0].value,
      dutySymbol: this.dutySymbols[0].value,
      flightSymbol: this.flightSymbols[0].value
    }
  }
 
  //Send the flight data  to the add-flight service 
  onSubmit(f) {
  if (f.value.hours !== null && f.value.hours < 9.0) {
      this.addFlight.logFlightData(f)
        .subscribe (
          (response: Response) => {
            console.log(response);
            if (response.status == 200) {
              this.openModal.nativeElement.click();
            }
          },
          (error) => console.log(error) 
        );
    } else {
      console.log('Incorrect hours input!'); //Display box on this
    } 
  }

  openModalFunction () {
    this.openModal.nativeElement.click();
  }

  onDropdownSelect(event) {
    //Bind the input that the user is currently using
    let selected = event.path[4].id; 

    //Utilize our local variable to determine which dropdown to close
    switch (selected) {  
      case this.elFlight.nativeElement.id:
        this.rd.removeClass(this.elFlight.nativeElement, 'show');
        break;
      case this.elDuty.nativeElement.id:
        this.rd.removeClass(this.elDuty.nativeElement, 'show');
        break;
      case this.elSeat.nativeElement.id:
        this.rd.removeClass(this.elSeat.nativeElement, 'show');
        break;
    }
  }

  onResetForm() {
    //Reset the form properties to their defaults, and reset date input
    this.flight.hours = this.hours;
    this.flight.remarks = this.remarksValue;
    this.flight.seat = this.seats[0].value;
    this.flight.dutySymbol = this.dutySymbols[0].value;
    this.flight.flightSymbol = this.flightSymbols[0].value;
  }
}
