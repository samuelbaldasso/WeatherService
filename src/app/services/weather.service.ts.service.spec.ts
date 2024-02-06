import { TestBed } from '@angular/core/testing';

import { WeatherServiceTsService } from './weather.service.ts.service';

describe('WeatherServiceTsService', () => {
  let service: WeatherServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
