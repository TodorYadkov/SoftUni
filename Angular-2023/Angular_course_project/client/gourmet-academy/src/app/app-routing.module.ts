import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
import { LoginComponent } from './features/login/login.component';
import { AddRestaurantComponent } from './features/add-restaurant/add-restaurant.component';
import { ProfileComponent } from './features/profile/profile.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { DetailsRestaurantComponent } from './features/details-restaurant/details-restaurant.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { onlyForGuestGuard } from './core/guards/only-for-guest.guard';
import { onlyForLoggedInGuard } from './core/guards/only-for-logged-in.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', canActivate: [onlyForGuestGuard], component: LoginComponent },
  { path: 'register', canActivate: [onlyForGuestGuard], component: RegisterComponent },
  { path: 'add-restaurants', canActivate: [onlyForLoggedInGuard], component: AddRestaurantComponent },
  { path: 'profile', canActivate: [onlyForLoggedInGuard], component: ProfileComponent },
  { path: 'details/:restaurantId', canActivate: [onlyForLoggedInGuard], component: DetailsRestaurantComponent },
  // {path: 'orders/:restaurant._id', component: }, TODO COMPONENT WHERE TO USER TO BUY
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }