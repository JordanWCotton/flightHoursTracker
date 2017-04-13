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
  datesSubmitted: boolean = false;
  datesInvalid: boolean = false;

  //Holds the raw hours after being sorted, before being rounded
  rawHours = {
        totalHours: 0,
        dayHours: 0,
        nvsHours: 0,
        nvgHours: 0,
        nvdHours: 0,
        hoodHours: 0,
        nightHours: 0,
        weatherHours: 0,
        simHours: 0
    }

    //Holds the rounded and ready to be viewed hours
      totalHours;
      dayHours;
      nvsHours;
      nvgHours;
      nvdHours;
      hoodHours;
      nightHours;
      weatherHours;
      simHours;

  constructor(private viewLog: ViewLogService) { 
    this.fromOptions = new DatePickerOptions ({
      initialDate: this.todayDate
    })

    this.toOptions = new DatePickerOptions ({
      initialDate: this.todayDate
    })
  }

  ngOnInit() {
    this.viewLog.pullHours()  //Have the service pull hours from the DB on form initialization
      .subscribe( 
        (flightData) => {
          this.sortHours(flightData);
        } 
      );
      this.roundHours(); //And then call our function to round the hours for proper addition and display
  }

  //Only way to allow .toFixed(1) to be called on hours, was to reassign them to new local variables
  //ensuring correct addition of hours for their display
  roundHours () {
    this.totalHours = this.rawHours.totalHours.toFixed(1);
    this.dayHours = this.rawHours.dayHours.toFixed(1);
    this.nvsHours = this.rawHours.nvsHours.toFixed(1);
    this.nvgHours = this.rawHours.nvgHours.toFixed(1);
    this.nvdHours = this.rawHours.nvdHours.toFixed(1);
    this.hoodHours = this.rawHours.hoodHours.toFixed(1);
    this.nightHours = this.rawHours.nightHours.toFixed(1);
    this.weatherHours = this.rawHours.weatherHours.toFixed(1);
    this.simHours = this.rawHours.simHours.toFixed(1);
  }

  sortHours (flightData) {
        let totalHours = 0;
        console.log('sortHours called');
        //Loop through the returned flight horus, separate them by flightSymbol, and add to corresponding variables
        for (let data in flightData) {
            flightData[data].flightSymbol ==  'Day' ? this.rawHours.dayHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'Night' ? this.rawHours.nightHours += flightData[data].hours
            : flightData[data].flightSymbol == 'Sim' ? this.rawHours.simHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'NVS' ? this.rawHours.nvsHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'NVG' ? this.rawHours.nvgHours += flightData[data].hours
            : flightData[data].flightSymbol == 'NVD' ? this.rawHours.nvdHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'Hood' ? this.rawHours.hoodHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'Wx' ? this.rawHours.weatherHours += flightData[data].hours : null;
        }

        //Gather hour totals 
        for (let hours in flightData) {
            totalHours += flightData[hours].hours;
          }
        this.rawHours.totalHours = totalHours;
        this.roundHours();
    }

  //Date range validation logic. Ensures users enter a date range from a point in the past to a point in the 
  //future. If they input an incorrect date range the button/date range display willd default back to current
  sendDates () {
    this.fromDate.year > this.toDate.year ? this.datesSubmitted = false//Failed
    : this.fromDate.month > this.toDate.month ? this.datesSubmitted = false//Failed
    : this.fromDate.month < this.toDate.month ? this.datesSubmitted = true//Pass 
    : this.fromDate.day <= this.toDate.day ? this.datesSubmitted = true//Pass 
    : this.datesSubmitted = false;//Failed
  }

}
