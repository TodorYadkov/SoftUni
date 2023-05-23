import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { DetailsComponent } from './details/details.component';
import { GenreComponent } from './genre/genre.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    MovieComponent,
    NavigationComponent,
    MovieCardComponent,
    DetailsComponent,
    GenreComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    MovieComponent,
    NavigationComponent,
    GenreComponent
  ]
})

export class FeaturesModule { }
