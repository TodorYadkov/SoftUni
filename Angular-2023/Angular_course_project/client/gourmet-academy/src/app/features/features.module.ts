import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { AddRestaurantComponent } from './restaurants/add-restaurant/add-restaurant.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRestaurantComponent } from './restaurants/edit-restaurant/edit-restaurant.component';
import { DetailsRestaurantComponent } from './restaurants/details-restaurant/details-restaurant.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from "../shared/shared.module";
import { ListProductsComponent } from './products/list-products/list-products.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';


@NgModule({
    declarations: [
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        AddRestaurantComponent,
        AddProductComponent,
        AboutUsComponent,
        ProfileComponent,
        EditRestaurantComponent,
        DetailsRestaurantComponent,
        EditProductComponent,
        NotFoundComponent,
        ListProductsComponent,
        DeleteProductComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class FeaturesModule { }
