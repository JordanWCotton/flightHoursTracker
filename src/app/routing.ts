import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { FlightLogComponent } from './flight-log/flight-log.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingMenuComponent } from './landing-menu/landing-menu.component';

const APP_ROUTES: Routes = [
    {path: '', component: LandingMenuComponent},
    {path: 'main-menu', component: MainMenuComponent},
    {path: 'flight-log', component: FlightLogComponent},
    {path: 'add-flight', component: AddFlightComponent},
    {path: 'log-in', component: LogInComponent},
    {path: 'sign-up', component: SignUpComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);

