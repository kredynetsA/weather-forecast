import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherApiService} from "./weather-api.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'weather-app';
  forecast: any;
  subscription: any;
  isActive: boolean = false;

  constructor(private weatherService: WeatherApiService) {
    this.forecast = localStorage.getItem('forecast');
    this.forecast = JSON.parse(this.forecast);
    if (!this.forecast) {
      this.getForecast()
    }

    // this.forecast = this.weatherService.getStorage()
  }

  ngOnInit() {}
  addTrip() {
    this.isActive = true
  }
  getForecast() {
    let city = 'Berlin';
    let date1 = '2023-08-07';
    let date2 = '2023-08-14';
    this.subscription = this.weatherService.getCityForecast(city, date1, date2).subscribe((res: any) => {
      console.log(res)
      // this.weatherService.setToStorage(city, res)
      localStorage.setItem('forecast', JSON.stringify(res))
    })
  }
  isPopupShown(event: any) {
    this.isActive = event
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
