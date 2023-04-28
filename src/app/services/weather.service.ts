import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '7b6e1e5c882dfd6cd0c05cfb4247ba7b';
  URI: string = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;

  constructor(private httpClient: HttpClient) { }

  getWeather(cityName: string, countryCode: string){

    return this.httpClient.get(`${this.URI}${cityName},${countryCode}&units=metric`);

  }
}
