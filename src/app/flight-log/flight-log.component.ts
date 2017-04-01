import { Component, OnInit } from '@angular/core';

import { ViewLogService } from '../view-log.service';

@Component({
  selector: 'app-flight-log',
  templateUrl: './flight-log.component.html',
  styleUrls: ['./flight-log.component.css']
})
export class FlightLogComponent implements OnInit {
  
  constructor(private viewLog: ViewLogService) { }

  totalHours: number;
  dayHours: number;
  nvsHours: number;
  nvgHours:number;
  nvdHours: number;
  hoodHours: number;
  nightHours: number;
  weatherHours: number;
  simHours: number;

  ngOnInit() {
    this.viewLog.pullHours(); //Have the service pull hours from the DB on form initialization
    this.setHours(); 
  }

  setHours () {
    let serviceHours = this.viewLog.pushHours(); //Pulling the hours object from the service's getter function

    //Set local variables to values from the view-log service
    this.totalHours = serviceHours.totalHours;
    this.dayHours = serviceHours.dayHours;
    this.nvsHours = serviceHours.nvsHours;
    this.nvgHours = serviceHours.nvgHours;
    this.nvdHours = serviceHours.nvdHours;
    this.hoodHours = serviceHours.hoodHours;
    this.nightHours = serviceHours.nightHours;
    this.weatherHours = serviceHours.weatherHours;
    this.simHours = serviceHours.simHours;
  }

}
