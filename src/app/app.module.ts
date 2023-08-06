import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { DayCardComponent } from './components/day-card/day-card.component';
import { CounterComponent } from './components/counter/counter.component';
import {HttpClientModule} from "@angular/common/http";
import { TimerComponent } from './components/timer/timer.component';
import { ImgComponent } from './components/img/img.component';
import { PopupComponent } from './components/popup/popup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CityCardComponent,
    DayCardComponent,
    CounterComponent,
    TimerComponent,
    ImgComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
