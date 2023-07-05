import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constants } from '../../environments/constants';
import { HttpClient } from '@angular/common/http';
import { IForecastDaily, ILocation } from 'src/app/models/wheater.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  geCityByIP(apiKey: string, ipAddress: string): Observable<ILocation> {
    const url = constants.weatherGetCityByIP_URL(apiKey, ipAddress);
    return this.http.get<ILocation>(url);
  }

  getOneDayForecast(apiKey: string, cityKey: string): Observable<IForecastDaily> {
    const url = constants.forecastDaily_Url(apiKey, cityKey);
    return this.http.get<IForecastDaily>(url);
  }

}
