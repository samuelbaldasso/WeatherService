import { API_KEY, baseURL } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeather(query: string, lang: string): Observable<Weather> {
    return this.http.get<Weather>(`https://${baseURL}`, {
      params: {
        key: API_KEY,
        q: query,
        lang: lang
      }
    });
  }
}
