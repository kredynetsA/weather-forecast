import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
KEY: string = '53P7S943N6K88JPZP3266LV75';
storage: any [] = [];
  constructor(private http: HttpClient) { }

  getCityForecast(city:string, date1: string, date2: string) {
    return this.http.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${date1}/${date2}?unitGroup=metric&include=days&key=${this.KEY}&cont
entType=json`)
  }

  getTodayForecast(city:string,) {
    return this.http.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${this.KEY}&contentType=json`)
  }

  setToStorage(name: string, data: any) {

    if (!localStorage.getItem('storage')) {
      let arr = [];
      let obj = {
        name: name,
        data: data
      }
      arr.push(obj)
      localStorage.setItem('storage', JSON.stringify(arr))
    }
    // let storageData = th
    let storageData = this.getStorage(name)
    console.log(storageData, 'KKKKKKKkk')

  }

  getStorage(name: string) {
    let d: any = localStorage.getItem('storage')
    JSON.parse(d)
    let item = d.find( (x: any) => x.name == name)
    return item

  }

}
