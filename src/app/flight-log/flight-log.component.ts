import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';   
import { Response } from '@angular/http';

import { ViewLogService } from '../view-log.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';


@Component({
  selector: 'app-flight-log',
  templateUrl: './flight-log.component.html',
  styleUrls: ['./flight-log.component.css']
})
export class FlightLogComponent implements OnInit {
  @ViewChild('openModalButton') openModal:ElementRef;

  public fromOptions: DatePickerOptions;
  public toOptions: DatePickerOptions;
  public fromDate: DateModel;
  public toDate: DateModel;
  public todayDate = new Date();
  datesSubmitted: boolean = false;
  datesInvalid: boolean = false;
  sortByDuty: boolean = false; 
  showTotals: boolean = false; 
  currentRemarks = '';

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

      /* ### ATP Requirements ### */

      flightSymReq = {
        totalHours: 70,
        dayHours: 20,
        nvsHours: 10,
        nvgHours: 10,
        nvdHours: 10,
        hoodHours: 5,
        nightHours: 20,
        weatherHours: 15,
        simHours: 40
      }

      reqDifference = {
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

      totalMet: boolean = false;
      dayMet: boolean = false;
      nvsMet: boolean = false;
      nvgMet: boolean = false;
      nvdMet: boolean = false;
      hoodMet: boolean = false;
      nightMet: boolean = false;
      weatherMet: boolean = false;
      simMet: boolean = false;

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
          this.flightSymbolSort(flightData);
          this.dutySymbolSort(flightData);
        } 
      );
      this.roundHours(); //Allows initial display of total hours
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
      (flightData) => {
       this.displayHoursRange (flightData);
      }
    );
  }

  filterTotals () {
    this.sortByDuty = (!this.sortByDuty);
  }

  changeHoursDisplay () {
    this.calculateRequirements();
    this.showTotals = (!this.showTotals);
  }

  displayHoursRange (flightData) {
    this.flightCollection = [];
    this.flightCollection = flightData;
    this.flightSymbolSort(flightData);
    this.dutySymbolSort(flightData);
  }

  showFlightRemarks (remarks) {
    this.currentRemarks = remarks;
    this.openModal.nativeElement.click();
  }

  calculateRequirements () {
    this.totalHours >= this.flightSymReq.totalHours ? this.totalMet = true : null;
    this.dayHours >= this.flightSymReq.dayHours ? this.dayMet = true : null;
    this.nvsHours >= this.flightSymReq.nvsHours ? this.nvsMet = true : null;
    this.nvdHours >= this.flightSymReq.nvdHours ? this.nvdMet = true : null;
    this.nvgHours >= this.flightSymReq.nvgHours ? this.nvgMet = true : null;
    this.hoodHours >= this.flightSymReq.hoodHours ? this.hoodMet = true : null;
    this.nightHours >= this.flightSymReq.nightHours ? this.nightMet = true : null;
    this.simHours >= this.flightSymReq.simHours ? this.simMet = true : null;
    this.weatherHours >= this.flightSymReq.weatherHours ? this.weatherMet = true : null;

    this.calculateReqDiff();
  }

  calculateReqDiff () {
    this.reqDifference.totalHours = this.flightSymReq.totalHours - this.totalHours;
    this.reqDifference.dayHours = this.flightSymReq.dayHours - this.dayHours;
    this.reqDifference.nvsHours = this.flightSymReq.nvsHours - this.nvsHours;
    this.reqDifference.nvgHours = this.flightSymReq.nvgHours - this.nvgHours;
    this.reqDifference.nvdHours = this.flightSymReq.nvdHours - this.nvdHours;
    this.reqDifference.hoodHours = this.flightSymReq.hoodHours - this.hoodHours;
    this.reqDifference.nightHours = this.flightSymReq.nightHours - this.nightHours;
    this.reqDifference.weatherHours = this.flightSymReq.weatherHours - this.weatherHours;
    this.reqDifference.simHours = this.flightSymReq.simHours - this.simHours;
  }

}
