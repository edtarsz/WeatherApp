import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherDTO } from '../models/weather';
import { key } from './key';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private readonly key = key;

    constructor(private http: HttpClient) { }

    getWeatherCity(city: string) {
        return this.http.get<WeatherDTO>(`http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${city}&lang=es`);
    }
}