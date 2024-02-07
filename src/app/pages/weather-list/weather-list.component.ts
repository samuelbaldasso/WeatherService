import { WeatherSearchComponent } from './../weather-search/weather-search.component';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Weather } from '../../models/weather.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [
    CommonModule,
    WeatherSearchComponent
  ],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css'
})
export class WeatherListComponent {
  data: any;
  constructor() { }

  getData(weather: Weather) {
    this.data = weather;
    console.log(this.data);
  }
}
