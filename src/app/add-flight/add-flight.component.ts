import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NG_VALIDATORS } from '@angular/forms';

import { AddFlightService } from '../add-flight.service';
import { Flight } from '../flight.interface';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {

  constructor(private addFlight: AddFlightService, private _fb: FormBuilder, private rd: Renderer2) {}

  //Bind elements to local variables
  @ViewChild('elFlight') elFlight:ElementRef;
  @ViewChild('elDuty') elDuty:ElementRef;
  @ViewChild('elSeat') elSeat:ElementRef;
  @ViewChild('openModalButton') openModal:ElementRef;

  public flight: Flight;
  public myForm: FormGroup;

  //Regex pattern that matches MM/DD/YYYY, from 1900-2099
  datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  hoursPattern = /^-?\d*\.?\d+$/;

  hours:number;
  remarksValue: string = '';
  dateSubmitted: boolean;

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

    //Model driven form for special date validation
    this.myForm = this._fb.group({
      date: ['', [Validators.required, <any>Validators.pattern(this.datePattern)]] 
    })
  }

  //Template driven form for static data handling
  initializeForm() {
    this.dateSubmitted = false;
    this.flight = {
      hours: this.hours, //Force user inputted values to be a float, with 1 decimal place
      remarks: this.remarksValue,
      seat: this.seats[0].value,
      dutySymbol: this.dutySymbols[0].value,
      flightSymbol: this.flightSymbols[0].value
    }
  }

  //Send the flight data  to the add-flight service and calls the 
  //completion modal after passing hours check
  onSubmit(f) {
    if (f.value.hours !== null && f.value.hours < 9.0) {
      this.addFlight.logFlightData(f);
      this.openModal.nativeElement.click();
    } else {
      console.log('ERROR!'); //Develop error throw here
    } 
  }

  //Send the date data to the add-flight service
  onSave(myForm) {
    //If the data supplied is valid, send date data to service and set dataSubmitted to true
    //to allow the rest of the form to be submitted
    if (myForm.valid === true) {
      this.addFlight.logFlightDate(myForm.value.date);
      this.dateSubmitted = true;
      console.log(myForm);
    } else {
      console.log('Error, data input not valid.')
    }
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
    this.initializeForm();
    this.myForm.reset();
  }
}
