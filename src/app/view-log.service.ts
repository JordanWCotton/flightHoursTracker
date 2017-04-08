import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { AuthService } from './auth.service';
import 'rxjs/Rx';

@Injectable()
export class ViewLogService {
    constructor (private http: Http, private auth: AuthService) {}

    pullHours () {
        console.log('Pulling hours!');
        const token: string = this.auth.getUserToken();
        return this.http.get('https://logit-5e725.firebaseio.com/flightData.json?auth='
        + token)
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        )
    }
}