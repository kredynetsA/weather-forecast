import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WeatherApiService} from "../../weather-api.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
@Output() isOpened = new EventEmitter<boolean>()
  form: any;
cities:  any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  constructor(private weatherService: WeatherApiService) {
    this.createForm()
  }

  ngOnInit(): void {
  }
  createForm() {
    this.form = new FormGroup({
      city: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
    })
  }

  // get name() { return this.heroForm.get('name'); }
  get city() {return this.form.get('city')}
  get startDate() {return this.form.get('startDate')}
  get endDate() {return this.form.get('endDate')}
  changeCity(e: any) {
    this.form.city?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  cancel () {
  this.isOpened.emit(false)
  }

  submit(){
    console.log(this.form)
    if (!this.form.valid) {
      return
    }
    this.isOpened.emit(false)
    console.log(this.form.value)
    let data = this.form.value
    // this.weatherService.getCityForecast(data.city, data.startDate,data.endDate).subscribe((res: any) => {
    //   console.log(res, 'NNNNN')
    // })
  }

}
