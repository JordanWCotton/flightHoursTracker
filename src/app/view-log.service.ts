import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ViewLogService {
    
    constructor (private http: Http) {}

    private rawData;
    private hours = {
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

    pullHours () {

        return this.http.get('https://logit-5e725.firebaseio.com/flightData.json')
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        )
    }

    sortHours (flightData) {
        let totalHours = 0;

        //Sort the hours by their flight symbol data
        for (let data in flightData) {
            flightData[data].flightSymbol ==  'Day' ? this.hours.dayHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'Night' ? this.hours.nightHours += flightData[data].hours
            : flightData[data].flightSymbol == 'Sim' ? this.hours.simHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'NVS' ? this.hours.nvsHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'NVG' ? this.hours.nvgHours += flightData[data].hours
            : flightData[data].flightSymbol == 'NVD' ? this.hours.nvdHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'Hood' ? this.hours.hoodHours += flightData[data].hours 
            : flightData[data].flightSymbol == 'Wx' ? this.hours.weatherHours += flightData[data].hours : null;
        }

        //Gather hour totals 
        for (let hours in flightData) {
            totalHours += flightData[hours].hours;
        }

        this.hours.totalHours = totalHours;
        console.log(this.hours.totalHours);
    }

    //Getter function for all of the hours pulled from the database
    pushHours () {
        return this.hours;
    }
}