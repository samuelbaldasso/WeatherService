import { Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';
import { Page404Component } from './pages/page-404/page-404.component';

export const routes: Routes = [
  { path: 'first-component', component: WeatherComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: Page404Component },
];
