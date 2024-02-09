import { Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'home', component: WeatherComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'about', component: AboutComponent },
  { path: '**', component: Page404Component },
];
