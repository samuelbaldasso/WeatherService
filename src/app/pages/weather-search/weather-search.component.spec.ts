import { ComponentFixture, async, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { WeatherSearchComponent } from './weather-search.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { API_KEY } from '../../../environments/environment';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../models/weather.model';
import { Observable, of } from 'rxjs';

describe('WeatherSearchComponent', () => {
  let component: WeatherSearchComponent;
  let fixture: ComponentFixture<WeatherSearchComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, WeatherSearchComponent],
      providers: [WeatherService]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherSearchComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);

    spyOn(weatherService, 'getWeather').and.returnValue(of({
      location: {
        name: 'London',
        region: 'City of London, Greater London',
        country: 'United Kingdom',
        lat: 51.52,
        lon: -0.11,
        tz_id: 'Europe/London',
        localtime_epoch: 1713989970,
        localtime: '2024-04-24 21:19'
      },
      current: {
        last_updated_epoch: 1713989700,
        last_updated: '2024-04-24 21:15',
        temp_c: 6.0,
        temp_f: 42.8,
        is_day: 0,
        condition: {
          text: 'Clear',
          icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
          code: 1000
        },
        wind_mph: 3.8,
        wind_kph: 6.1,
        wind_degree: 320,
        wind_dir: 'NW',
        pressure_mb: 1014.0,
        pressure_in: 29.94,
        precip_mm: 0.0,
        precip_in: 0.0,
        humidity: 65,
        cloud: 0,
        feelslike_c: 5.8,
        feelslike_f: 42.5,
        vis_km: 10.0,
        vis_miles: 6.0,
        uv: 1.0,
        gust_mph: 8.3,
        gust_kph: 13.3
      }
    }));

    fixture.detectChanges(); // Triggers initial data binding and hook cycle
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should handle data successfully', (done: DoneFn) => {
    component.search('london', 'en');
    setTimeout(() => {
      expect(component.weatherData).toBeDefined();
      expect(component.weatherData?.location?.name).toEqual('London');
      done();
    }, 500);

    fixture.detectChanges();
  });

});
