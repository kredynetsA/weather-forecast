import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WeatherApiService} from "../../weather-api.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
@Input() data: any;
addressForecast: any;
img: any;
weatherData: any;
subscription: any;

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit(): void {
    // this.getTodaysForecast();
  }

  getTodaysForecast() {
    this.subscription = this.weatherService.getTodayForecast(this.data.address).subscribe((res:any) => {
      this.addressForecast = res.address
      this.weatherData = res.days[0];
      this.img = this.weatherData.icon
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
