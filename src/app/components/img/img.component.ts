import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
@Input() icon: any;
forecastIcon: any = '';
  constructor() {}

  ngOnInit(): void {
    this.getIcon(this.icon)
  }
  getIcon(icon: any) {
    if (this.icon === "partly-cloudy-day") {
      this.forecastIcon = "partly-cloudy.png"
    }
    if (this.icon === "rain") {
      this.forecastIcon = "heavy-rain.png"
    }
    if (this.icon === "clear-day") {
      this.forecastIcon = "sun.png"
    }
    if (this.icon === "wind") {
      this.forecastIcon = "wind.png"
    }
  }

}
