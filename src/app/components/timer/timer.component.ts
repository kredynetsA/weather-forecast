import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() date: any;
  subscription?: Subscription;
  tripDate: any;
  currentDate: any;
  timeDifference: any;
  milliSecondsInASecond:number = 1000;
  hoursInADay:number = 24;
  minutesInAnHour: number = 60;
  SecondsInAMinute: number = 60;
  secondsToDday: any;
  minutesToDday: any;
  hoursToDday: any;
  daysToDday: any;
  constructor() {}
  ngOnInit(): void {
    this.tripDate = new Date(this.date);
    this.subscription = interval(1000)
      .subscribe(x => {
        this.getTimeDifference(this.tripDate)
      });
  }
  getTimeDifference(date: any) {
    this.currentDate = new Date();
    this.timeDifference = date - this.currentDate;
    this.allocateTimeUnits(this.timeDifference);
  }
  allocateTimeUnits(timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) /(this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  };
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}
