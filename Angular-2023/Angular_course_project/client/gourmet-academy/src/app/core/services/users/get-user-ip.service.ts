import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserIpService {
  // Here I use https://www.ipify.org/ to send a request from a user computer and the API returns the user's public IP address - use in AccuWeather to get my user's location
  private publicAPItoGetIp: string = 'http://api.ipify.org/?format=json';

  constructor(private http: HttpClient) { }

  getIPAddress(): Observable<{ ip: string }> {
    // Send a request to a public API, this request is client side and from the response I get a json object with {"ip":"0.0.0.0"}
    return this.http.get<{ ip: string }>(this.publicAPItoGetIp);
  }
}
