import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListComponent } from './weather-list.component';
import { Weather } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';

describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should get data by getData()', () => {
    const weather: Weather = {
      location: {
        name: "London",
        region: "City of London, Greater London",
        country: "United Kingdom",
        lat: 51.52,
        lon: -0.11,
        tz_id: "Europe/London",
        localtime_epoch: 1707488098,
        localtime: "2024-02-09 14:14"
      },
      current: {
        last_updated_epoch: 1707487200,
        last_updated: "2024-02-09 14:00",
        temp_c: 12.0,
        temp_f: 53.6,
        is_day: 1,
        condition: {
          text: "Light rain",
          icon: "//cdn.weatherapi.com/weather/64x64/day/296.png",
          code: 1183
        }
      }
    };

    component.getData(weather);
    expect(component.data).toEqual(weather);
  });
});
