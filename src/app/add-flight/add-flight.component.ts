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
  @ViewChild('openSecModal') openSecModal:ElementRef;

  public flight: Flight; 
  public myForm: FormGroup;
  public date: DateModel;
  public options: DatePickerOptions;
  public todayDate = new Date();
  public hours: number;
  public remarksValue: string = '';

  constructor(private addFlight: AddFlightService, private _fb: FormBuilder, 
  private rd: Renderer2) {
    this.options = new DatePickerOptions ({
      initialDate: this.todayDate
    });
  }
 
  //Static values for our user input menus
  seatOne = [
    { value: 'F'}, 
    { value: 'B'}
  ];

  seatTwo = [
    { value: 'F'}, 
    { value: 'B'}
  ];

  seatThree = [
    { value: 'F'}, 
    { value: 'B'}
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

  /* dutySymbolsOne = [
    { value: 'PI'},
    { value: 'PC'},
    { value: 'IP'},
    { value: 'SP'}
  ];

  dutySymbolsTwo = [
    { value: 'PI'},
    { value: 'PC'},
    { value: 'IP'},
    { value: 'SP'}
  ];

  dutySymbolsThree = [
    { value: 'PI'},
    { value: 'PC'},
    { value: 'IP'},
    { value: 'SP'}
  ];

  flightSymbolsOne = [
    { value: 'Day'},
    { value: 'Night'},
    { value: 'Sim'},
    { value: 'NVS'},
    { value: 'NVG'},
    { value: 'NVD'},
    { value: 'Hood'},
    { value: 'Wx'}
  ];

  flightSymbolsTwo = [
    { value: 'Day'},
    { value: 'Night'},
    { value: 'Sim'},
    { value: 'NVS'},
    { value: 'NVG'},
    { value: 'NVD'},
    { value: 'Hood'},
    { value: 'Wx'}
  ];

  flightSymbolsThree = [
    { value: 'Day'},
    { value: 'Night'},
    { value: 'Sim'},
    { value: 'NVS'},
    { value: 'NVG'},
    { value: 'NVD'},
    { value: 'Hood'},
    { value: 'Wx'}
  ]; */

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
      seatOne: this.seatOne[0].value,
      seatTwo: this.seatTwo[0].value,
      seatThree: this.seatThree[0].value,
      dutySymbol: this.dutySymbols[0].value,
      flightSymbol: this.flightSymbols[0].value
    }
  }
 
  //Send the flight data  to the add-flight service 
  onSubmit(f) {
  if (f.value.hours !== null && f.value.hours < 12.0) {
      this.addFlight.logFlightData(f.value)
        .subscribe (
          (response: Response) => {
            console.log(response);
            if (response.status == 200) {
              this.openModal.nativeElement.click(); //Displays success modal
            } 
          },
          (error) => console.log(error) 
        );
    } else {
       
    } 

    console.log(f);
  }

  //Closes the dropdown menus when the user selects something
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
    this.flight.seatOne = this.seatOne[0].value;
    this.flight.seatTwo = this.seatTwo[0].value;
    this.flight.seatThree = this.seatThree[0].value;
    this.flight.dutySymbol = this.dutySymbols[0].value;
    this.flight.flightSymbol = this.flightSymbols[0].value;
  }
}
