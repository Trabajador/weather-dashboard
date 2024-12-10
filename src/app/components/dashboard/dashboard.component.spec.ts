import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { WeatherService } from 'src/app/services/weather.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let weatherServiceMock: any;

  beforeEach(() => {
    weatherServiceMock = {
      getWeather: jasmine.createSpy('getWeather').and.returnValue(
        of({
          name: 'London',
          main: { temp: 15 },
          weather: [{ description: 'clear sky' }],
        })
      ),
    };

    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: WeatherService, useValue: weatherServiceMock }],
    });

    const fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should add a city', () => {
    component.cityName = 'London';
    component.addCity();
    expect(component.cities.length).toBe(1);
    expect(component.cities[0].name).toBe('London');
  });
});
