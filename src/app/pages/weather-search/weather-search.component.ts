import { Weather } from './../../models/weather.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather-search',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './weather-search.component.html',
  styleUrl: './weather-search.component.css',
  providers: [WeatherService, HttpClientModule]
})
export class WeatherSearchComponent {
  @Output() listWeather = new EventEmitter<Weather>();
  query: any;
  weatherData: Weather = {} as Weather;

  constructor(
    private weatherService: WeatherService) { }

  search(query: string, lang: string) {
    this.weatherService.getWeather(query, lang).subscribe((data: Weather) => {
      this.weatherData = data;
      this.listWeather.emit(this.weatherData);
      console.log(this.weatherData);
    });
  }
}
