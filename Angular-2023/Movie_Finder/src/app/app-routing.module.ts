import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './features/movie/movie.component';
import { DetailsComponent } from './features/details/details.component';
import { GenreComponent } from './features/genre/genre.component';
import { SearchComponent } from './features/search/search.component';

const routes: Routes = [
  { path: '', component: MovieComponent, pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'genre/:id', component: GenreComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
