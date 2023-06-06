import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
import { LoginComponent } from './features/login/login.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { CreateComponent } from './features/create/create.component';
import { EditComponent } from './features/edit/edit.component';
import { DetailsComponent } from './features/details/details.component';
import { SearchComponent } from './features/search/search.component';
import { isLoggedInGuard } from './core/guards/is-logged-in.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'create', canActivate: [isLoggedInGuard], component: CreateComponent },
  { path: 'edit/:albumId', canActivate: [isLoggedInGuard], component: EditComponent },
  { path: 'details/:albumId', canActivate: [isLoggedInGuard], component: DetailsComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
