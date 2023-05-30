import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { DetailsComponent } from './features/details/details.component';
import { EditComponent } from './features/edit/edit.component';
import { CreateComponent } from './features/create/create.component';
import { NotFound404Component } from './features/not-found404/not-found404.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'catalog', component: CatalogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'edit/:id', component: EditComponent, canActivate: [authGuard] },
  { path: 'create', component: CreateComponent, canActivate: [authGuard] },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
