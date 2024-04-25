import { WeatherSearchComponent } from './../weather-search/weather-search.component';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Weather } from '../../models/weather.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [
    CommonModule,
    WeatherSearchComponent,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css',
  providers: [HttpClientModule]
})
export class WeatherListComponent {
  data: any;
  constructor() { }

  getData(weather: Weather) {
    this.data = weather;
  }
}
