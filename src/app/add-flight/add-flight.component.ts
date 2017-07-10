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
  public hoursOne: number;
  public hoursTwo: number;
  public hoursThree: number;
  public remarksValue: string = '';

  constructor(private addFlight: AddFlightService, private _fb: FormBuilder, 
  private rd: Renderer2) {
    this.options = new DatePickerOptions ({
      initialDate: this.todayDate
    });
  }
 
  //Static values for our user input menus
  seatOne = [
    { value: ''},
    { value: 'F'}, 
    { value: 'B'}
  ];

  seatTwo = [
    { value: ''},
    { value: 'F'}, 
    { value: 'B'}
  ];

  seatThree = [
    { value: ''},
    { value: 'F'}, 
    { value: 'B'}
  ];

  dutySymbolsOne = [
    { value: ''},
    { value: 'PI'},
    { value: 'PC'},
    { value: 'IP'},
    { value: 'SP'}
  ];

  dutySymbolsTwo = [
    { value: ''},
    { value: 'PI'},
    { value: 'PC'},
    { value: 'IP'},
    { value: 'SP'}
  ];

  dutySymbolsThree = [
    { value: ''},
    { value: 'PI'},
    { value: 'PC'},
    { value: 'IP'},
    { value: 'SP'}
  ];

  flightSymbolsOne = [
    { value: ''},
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
    { value: '' },
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
    { value: ''},
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
      hoursOne: this.hoursOne,
      hoursTwo: this.hoursTwo,
      hoursThree: this.hoursThree,
      remarks: this.remarksValue,
      seatOne: this.seatOne[0].value,
      seatTwo: this.seatTwo[0].value,
      seatThree: this.seatThree[0].value,
      dutySymbolOne: this.dutySymbolsOne[0].value,
      dutySymbolTwo: this.dutySymbolsTwo[0].value,
      dutySymbolThree: this.dutySymbolsThree[0].value,
      flightSymbolOne: this.flightSymbolsOne[0].value,
      flightSymbolTwo: this.flightSymbolsTwo[0].value,
      flightSymbolThree: this.flightSymbolsThree[0].value
    }
  }
 
  //Send the flight data  to the add-flight service 
  onSubmit(f) { 
    //replace hours validator here
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

  //Reset the form properties to their defaults, and reset date input
  onResetForm() {
    this.flight.hoursOne = this.hoursOne;
    this.flight.hoursTwo = this.hoursTwo;
    this.flight.hoursThree = this.hoursThree;
    this.flight.remarks = this.remarksValue;
    this.flight.seatOne = this.seatOne[0].value;
    this.flight.seatTwo = this.seatTwo[0].value;
    this.flight.seatThree = this.seatThree[0].value;
    this.flight.dutySymbolOne = this.dutySymbolsOne[0].value;
    this.flight.dutySymbolTwo = this.dutySymbolsTwo[0].value;
    this.flight.dutySymbolThree = this.dutySymbolsThree[0].value;
    this.flight.flightSymbolOne = this.flightSymbolsOne[0].value;
    this.flight.flightSymbolTwo = this.flightSymbolsTwo[0].value;
    this.flight.flightSymbolThree = this.flightSymbolsThree[0].value;
  }
}
