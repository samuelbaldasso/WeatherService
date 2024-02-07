import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { WeatherListComponent } from '../weather-list/weather-list.component';
import { WeatherSearchComponent } from '../weather-search/weather-search.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  constructor() {

  }

}
