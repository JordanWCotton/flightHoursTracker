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
  public datesSubmitted: boolean = false;

  constructor(private viewLog: ViewLogService) { 
    this.fromOptions = new DatePickerOptions ({
      initialDate: this.todayDate
    })

    this.toOptions = new DatePickerOptions ({
      initialDate: this.todayDate
    })
  }

  public rawHours = {
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

    //Variables that will be displayed to the user 
      totalHours;
      dayHours;
      nvsHours;
      nvgHours;
      nvdHours;
      hoodHours;
      nightHours;
      weatherHours;
      simHours;

  ngOnInit() {
    this.viewLog.pullHours()  //Have the service pull hours from the DB on form initialization
      .subscribe( 
        (flightData) => {
          this.sortHours(flightData);
        } 
      );
      this.roundHours();
  }

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
        //Sort the hours by their flight symbol data
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
    }


  sendDates () {
    this.datesSubmitted = true;
    console.log('From: ' + this.fromDate.formatted);
    console.log('To: ' + this.toDate.formatted);
    console.log(this.fromDate);
   
    //Date range validation logic. Ensures users enter a date range from a point in the past to a point in the future
    this.fromDate.year > this.toDate.year ? console.log('Failed!') 
    : this.fromDate.month < this.toDate.month ? console.log('Correct!') 
    : this.fromDate.month > this.toDate.month ? console.log('Failed!') 
    : this.fromDate.day <= this.toDate.day ? console.log('Correct!') : console.log('Failed!');
  }

}
