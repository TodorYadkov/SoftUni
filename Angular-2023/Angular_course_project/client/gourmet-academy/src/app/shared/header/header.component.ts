import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Subscription } from 'rxjs';
import { GetUserIpService } from 'src/app/core/services/users/get-user-ip.service';
import { DataService } from 'src/app/core/services/data/data.service';
import { WeatherService } from 'src/app/core/services/data/weather.service';
import { IForecastDaily, ILocation } from 'src/app/models/wheater.interfaces';
import { UsersService } from 'src/app/core/services/users/users.service';
import { ManagerSessionService } from 'src/app/core/services/users/manager-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  theme!: string;
  subscription!: Subscription;

  // IF NOT USE WEATHER API - DELETE ALL OF THIS and do NOT forget to delete and services
  // ipAddressSubscription$!: Subscription;
  // userIpAddress!: string;
  // cityObj!: ILocation;
  // forecastDaily!: IForecastDaily;
  // isReadyForecast: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document, // Use document object to add new class in index.thml on html tag
    private themeService: ThemeService,
    private userService: UsersService,
    private managerSession: ManagerSessionService,
    private router: Router,
    // private getUserIp: GetUserIpService,
    // private getData: DataService,
    // private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.theme = this.themeService.theme; // Set theme color 
    this.updateThemeColor(); // Set theme color 

    // DO NOT FORGET TO IMPLEMENT WEATHER API IT WORK ONLY TO SET WHERE TO SHOW FOR TEST
    // this.ipAddressSubscription$ = this.getUserIp  // Get user ip address
    //   .getIPAddress()
    //   .subscribe({
    //     next: (res) => this.userIpAddress = res.ip,
    //     error: (error) => this.ipAddressSubscription$.unsubscribe(),
    //     complete: () => {

    //       let accuWeatherAPIKey: string;
    //       let dataSubscription$: Subscription;
    //       dataSubscription$ = this.getData.getAPIKeys() // Get wheater API keys
    //         .subscribe({
    //           next: (keyObj) => accuWeatherAPIKey = keyObj.accuWeatherApiKey,
    //           error: (error) => dataSubscription$.unsubscribe(),
    //           complete: () => {

    //             let ipSubscription$: Subscription;
    //             ipSubscription$ = this.weatherService.geCityByIP(accuWeatherAPIKey, this.userIpAddress) // Get city by IP - this.userIpAddress
    //               .subscribe({
    //                 next: (city) => this.cityObj = city,
    //                 error: (error) => ipSubscription$.unsubscribe(),
    //                 complete: () => {

    //                   let forecastSubscription$: Subscription;
    //                   forecastSubscription$ = this.weatherService.getOneDayForecast(accuWeatherAPIKey, this.cityObj.Key) // Get forecast
    //                     .subscribe({
    //                       next: (forecast) => {
    //                         this.forecastDaily = forecast;
    //                         this.isReadyForecast = true;
    //                         console.log(this.forecastDaily) // REMOVE THIS ROW ONLY FOR TEST
    //                       },
    //                       error: (error) => forecastSubscription$.unsubscribe(),
    //                       complete: () => forecastSubscription$.unsubscribe()
    //                     })

    //                   ipSubscription$.unsubscribe();
    //                 }
    //               })

    //             dataSubscription$.unsubscribe();
    //           }
    //         })
    //       this.ipAddressSubscription$.unsubscribe();
    //     }
    //   });


  }

  // getWeatherIcon(iconCode: number): string {

  // }

  // check which navigation to display
  updateNav(): boolean {

    return this.managerSession.userStatus;
  }

  // Check which theme to apply
  checkThemeState() { // Check current state of the theme
    this.themeService.theme = this.themeService.theme === 'light' ? 'dark' : 'light';
    this.theme = this.themeService.theme;
    this.updateThemeColor()
  }
  // Update with selected theme
  private updateThemeColor() {
    this.document.documentElement.setAttribute('data-bs-theme', this.themeService.theme); // Set new attribute on html tag to show correct theme
  }

  // Logout
  logout() {
    this.subscription = this.userService.logout()
      .subscribe({
        next: (data) => {
          this.managerSession.clearSession();
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.managerSession.clearSession();
          console.error(error.error.message)
          this.router.navigate(['/']);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

}