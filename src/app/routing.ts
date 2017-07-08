import { Routes, RouterModule, CanActivate } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { FlightLogComponent } from './flight-log/flight-log.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingMenuComponent } from './landing-menu/landing-menu.component';
import { AuthenticationGuard } from './routing-guard';

const APP_ROUTES: Routes = [
    {path: '', component: LandingMenuComponent},
    {path: 'main-menu', component: MainMenuComponent, canActivate: [AuthenticationGuard]},
    {path: 'flight-log', component: FlightLogComponent, canActivate: [AuthenticationGuard]},
    {path: 'add-flight', component: AddFlightComponent, canActivate: [AuthenticationGuard]},
    {path: 'landing-menu', component: LandingMenuComponent},
    {path: 'sign-up', component: SignUpComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);

