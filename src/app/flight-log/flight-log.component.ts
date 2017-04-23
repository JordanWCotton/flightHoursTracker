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
  sortByDuty: boolean = false; //Determines whether hours are sorted via duty symbol or flight symbol

  //Holds the raw flight symbol hours after being sorted, before being rounded
  rawFlightHours = {
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

    //Raw duty hours before being rounded
    rawDutyHours = {
      hoursPI: 0,
      hoursPC: 0,
      hoursIP: 0,
      hoursSP: 0
    }

    flightCollection = [];

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
      hoursPI;
      hoursPC;
      hoursIP;
      hoursSP;

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
          this.flightCollection = flightData;
          //this.flightSymbolSort(flightData);
          //this.dutySymbolSort(flightData);
        } 
      );
      //this.roundHours(); //Shows previously saved hours while waiting for server response to pull hours
  }

  //Only way to allow .toFixed(1) to be called on hours, was to reassign them to new local variables
  //ensuring correct addition of hours for their display
  roundHours () { 
    this.totalHours = this.rawFlightHours.totalHours.toFixed(1);
    this.dayHours = this.rawFlightHours.dayHours.toFixed(1);
    this.nvsHours = this.rawFlightHours.nvsHours.toFixed(1);
    this.nvgHours = this.rawFlightHours.nvgHours.toFixed(1);
    this.nvdHours = this.rawFlightHours.nvdHours.toFixed(1);
    this.hoodHours = this.rawFlightHours.hoodHours.toFixed(1);
    this.nightHours = this.rawFlightHours.nightHours.toFixed(1);
    this.weatherHours = this.rawFlightHours.weatherHours.toFixed(1);
    this.simHours = this.rawFlightHours.simHours.toFixed(1);
    this.hoursPI = this.rawDutyHours.hoursPI.toFixed(1);
    this.hoursPC = this.rawDutyHours.hoursPC.toFixed(1);
    this.hoursIP = this.rawDutyHours.hoursIP.toFixed(1);
    this.hoursSP = this.rawDutyHours.hoursSP.toFixed(1);
  }

  sortTotalHours (flightData) {
    let totalHours = 0;
    for (let hours in flightData) {
      totalHours += flightData[hours].hours;
    }
    this.rawFlightHours.totalHours = totalHours;
  }

  flightSymbolSort (flightData) {  
        //Loop through the returned flight hours, separate them by flightSymbol, and add to corresponding variables
        for (let data in flightData) {
            flightData[data].flightSymbol ==  'Day' ? this.rawFlightHours.dayHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'Night' ? this.rawFlightHours.nightHours += flightData[data].hours
            : flightData[data].flightSymbol == 'Sim' ? this.rawFlightHours.simHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'NVS' ? this.rawFlightHours.nvsHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'NVG' ? this.rawFlightHours.nvgHours += flightData[data].hours
            : flightData[data].flightSymbol == 'NVD' ? this.rawFlightHours.nvdHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'Hood' ? this.rawFlightHours.hoodHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'Wx' ? this.rawFlightHours.weatherHours += flightData[data].hours : null;
        }

        this.sortTotalHours(flightData);
        this.roundHours();
    }

    dutySymbolSort (flightData) {
      for (let data in flightData) {
        flightData[data].dutySymbol == 'PI' ? this.rawDutyHours.hoursPI += flightData[data].hours
        : flightData[data].dutySymbol == 'PC' ? this.rawDutyHours.hoursPC += flightData[data].hours
        : flightData[data].dutySymbol == 'IP' ? this.rawDutyHours.hoursIP += flightData[data].hours
        : flightData[data].dutySymbol == 'SP' ? this.rawDutyHours.hoursSP += flightData[data].hours : null;
      }

      //this.sortTotalHours(flightData);
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

    let dateRange = {
      toDate : this.toDate,
      fromDate : this.fromDate
    };

    this.viewLog.pullHourRange(dateRange)
    .subscribe (
      (res) => {
        console.log(res);
      }
    );
  }

  filterDisplayHours () {
    this.sortByDuty = (!this.sortByDuty);
    console.log(this.sortByDuty);
  }

}
