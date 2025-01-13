import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cityName: string = '';
  cities: any[] = [];
  loading: boolean = false;
  isDarkMode: boolean = false;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    const savedCities = localStorage.getItem('cities');
    if (savedCities) {
      this.cities = JSON.parse(savedCities);
    }
  }

  addCity(): void {
    this.loading = true;
    this.weatherService.getWeather(this.cityName).subscribe(
      (data) => {
        if (this.cities.some(city => city.name === data.name)) {
          this.errorMessage = 'This city is already in your list';
          this.cityName = '';
          this.loading = false;
          return;
        }

        const cityData = {
          name: data.name,
          temp: data.main.temp,
          condition: data.weather[0].description,
        };
        this.cities.push(cityData);
        localStorage.setItem('cities', JSON.stringify(this.cities));
        this.cityName = '';
        this.loading = false;
        this.errorMessage = '';
      },

      (error) => {
        this.errorMessage = 'City not found';
        this.loading = false;
      }
    );
  }

  removeCity(cityName: string): void {
    this.cities = this.cities.filter((city) => city.name !== cityName);
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }
}
