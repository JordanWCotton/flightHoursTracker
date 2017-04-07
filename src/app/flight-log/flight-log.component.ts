import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ViewLogService } from '../view-log.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-flight-log',
  templateUrl: './flight-log.component.html',
  styleUrls: ['./flight-log.component.css']
})
export class FlightLogComponent implements OnInit {
  public fromOptions: DatePickerOptions;
  public toOptions: DatePickerOptions;
  public fromDate: DateModel;
  public toDate: DateModel;
  public todayDate = new Date();

  constructor(private viewLog: ViewLogService) { 
    this.fromOptions = new DatePickerOptions ({
      initialDate: this.todayDate
    })

    this.toOptions = new DatePickerOptions ({
      initialDate: this.todayDate
    })
  }

  totalHours: string;
  dayHours: string;
  nvsHours: string;
  nvgHours:string;
  nvdHours: string;
  hoodHours: string;
  nightHours: string;
  weatherHours: string;
  simHours: string;

//Data to simulate data from DB for purpose of developing hours sorting algorithms when
//not connected to the internet
  fakeData = {
    'flightOne': {
      'date': '2017-01-01',
      'dutySymbol': 'PC',
      'flightSymbol': 'Sim',
      'hours': 6.3,
      'remarks': 'Fake data',
      'seat': 'Front'
    },
    'flightTwo': {
      'date': '2017-01-01',
      'dutySymbol': 'SP',
      'flightSymbol': 'NVD',
      'hours': 3.3,
      'remarks': 'Fake data',
      'seat': 'Front'
    },
    'flightThree': {
      'date': '2017-01-01',
      'dutySymbol': 'IP',
      'flightSymbol': 'Wx',
      'hours': 2.3,
      'remarks': 'Fake data',
      'seat': 'Front'
    },
    'flightFour': {
      'date': '2017-01-01',
      'dutySymbol': 'SP',
      'flightSymbol': 'NVD',
      'hours': 3.3,
      'remarks': 'Fake data',
      'seat': 'Front'
    },
    'flightFive': {
      'date': '2017-01-01',
      'dutySymbol': 'SP',
      'flightSymbol': 'Sim',
      'hours': 3.3,
      'remarks': 'Fake data',
      'seat': 'Front'
    },
    'flightSix': {
      'date': '2017-01-01',
      'dutySymbol': 'SP',
      'flightSymbol': 'NVD',
      'hours': 3.3,
      'remarks': 'Fake data',
      'seat': 'Front'
    },
    'flightSeven': {
      'date': '2017-01-01',
      'dutySymbol': 'SP',
      'flightSymbol': 'Wx',
      'hours': 3.3,
      'remarks': 'Fake data',
      'seat': 'Front'
    },
  }

  ngOnInit() {
    this.viewLog.pullHours()  //Have the service pull hours from the DB on form initialization
      .subscribe( 
        (flightData) => {
          this.viewLog.sortHours(flightData);
          this.setHours();
        } 
      );
  }

  setHours () {
    let serviceHours = this.viewLog.pushHours();
    //Set local variables to values from the view-log service
    this.totalHours = serviceHours.totalHours.toFixed(1);
    this.dayHours = serviceHours.dayHours.toFixed(1);
    this.nvsHours = serviceHours.nvsHours.toFixed(1);
    this.nvgHours = serviceHours.nvgHours.toFixed(1);
    this.nvdHours = serviceHours.nvdHours.toFixed(1);
    this.hoodHours = serviceHours.hoodHours.toFixed(1);
    this.nightHours = serviceHours.nightHours.toFixed(1);
    this.weatherHours = serviceHours.weatherHours.toFixed(1);
    this.simHours = serviceHours.simHours.toFixed(1);
  }

  sendDates () {
    console.log('From: ' + this.fromDate.formatted);
    console.log('To: ' + this.toDate.formatted);
  }

}
