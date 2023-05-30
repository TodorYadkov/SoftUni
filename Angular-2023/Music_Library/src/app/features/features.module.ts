import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { NotFound404Component } from './not-found404/not-found404.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent,
    DetailsComponent,
    EditComponent,
    CreateComponent,
    NotFound404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [

  ]
})
export class FeaturesModule { }
