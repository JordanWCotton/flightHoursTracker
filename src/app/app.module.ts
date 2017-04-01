import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FlightLogComponent } from './flight-log/flight-log.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { routing } from './routing';
import { AddFlightService } from './add-flight.service';
import { ViewLogService } from './view-log.service';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FlightLogComponent,
    AddFlightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
  ],
  providers: [AddFlightService, ViewLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
