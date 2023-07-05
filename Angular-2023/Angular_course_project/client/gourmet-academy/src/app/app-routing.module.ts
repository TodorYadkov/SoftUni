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
import { AddProductComponent } from './features/add-product/add-product.component';
import { EditProductComponent } from './features/edit-product/edit-product.component';
import { onlyForGuestGuard } from './core/guards/only-for-guest.guard';
import { onlyForLoggedInGuard } from './core/guards/only-for-logged-in.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, canActivate: [onlyForGuestGuard] },
  { path: 'login', component: LoginComponent, canActivate: [onlyForGuestGuard] },
  { path: 'add-restaurants', component: AddRestaurantComponent, canActivate: [onlyForLoggedInGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [onlyForLoggedInGuard] },
  { path: 'about-us', component: AboutUsComponent },
  // {path: 'orders/:restaurant._id', component: }, TODO COMPONENT WHERE TO USER TO BUY
  { path: 'details', canActivate: [onlyForLoggedInGuard], component: DetailsRestaurantComponent }, // :restaurantId NOT FORGOT TO ADD THIS AFTER THE PATH
  { path: 'products/:productId', component: AddProductComponent, canActivate: [onlyForLoggedInGuard] },
  { path: 'products/edit/:productId', component: EditProductComponent, canActivate: [onlyForLoggedInGuard] },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
