import { Component, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  weather: any;
  error: any;
  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {

  }





  getWeather(cityName: string, countryCode: string){
    this.weatherService.getWeather(cityName, countryCode)
    .subscribe({
      next: (res) => {
        this.weather = res;
    },error: (err) => {
      console.log(err)
      this.error = err;
      alert(this.error.error.message)
    }

  })
  }



  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement){
   if(cityName.value && countryCode.value){
    this.getWeather(cityName.value, countryCode.value)

    cityName.value = "";
    countryCode.value = "";

   }else{
    alert("Por favor, coloque todos los datos")
   }
    cityName.focus();
    return false
  }

}
