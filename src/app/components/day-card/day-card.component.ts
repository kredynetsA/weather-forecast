import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent implements OnInit {
@Input() dayData: any;
  constructor() {

  }

  ngOnInit(): void {
    // this.dayData = this.dayData.days
  }

}
