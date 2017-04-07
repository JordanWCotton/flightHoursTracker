import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ViewLogService {
    constructor (private http: Http) {}

    pullHours () {
        console.log('Pulling hours!');
        return this.http.get('https://logit-5e725.firebaseio.com/flightData.json')
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        )
    }
}