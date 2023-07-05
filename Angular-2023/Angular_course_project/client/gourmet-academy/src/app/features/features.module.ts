import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { DetailsRestaurantComponent } from './details-restaurant/details-restaurant.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from "../shared/shared.module";


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
        DetailsProductComponent,
        EditProductComponent,
        NotFoundComponent
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
