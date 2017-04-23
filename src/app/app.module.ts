import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FlightLogComponent } from './flight-log/flight-log.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { routing } from './routing';
import { AddFlightService } from './add-flight.service';
import { ViewLogService } from './view-log.service';
import { LogInComponent } from './log-in/log-in.component';
import { LandingMenuComponent } from './landing-menu/landing-menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './auth.service';
import { AuthenticationGuard } from './routing-guard';
import { FlightTotalsComponent } from './flight-log/flight-totals/flight-totals.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FlightLogComponent,
    AddFlightComponent,
    LogInComponent,
    LandingMenuComponent,
    SignUpComponent,
    FlightTotalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    DatePickerModule
  ],
  providers: [AddFlightService, ViewLogService, AuthService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
