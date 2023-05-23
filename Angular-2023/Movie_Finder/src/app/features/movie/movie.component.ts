import { Component, OnInit, OnDestroy } from '@angular/core';
import { IGenres, IMovies } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit, OnDestroy {
  popular: IMovies;
  topRated: IMovies;
  allGenres: IGenres;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.moviesService
      .getPopular()
      .subscribe(data => this.popular = data);

    this.moviesService
      .getTopRated()
      .subscribe(data => this.topRated = data);

    this.moviesService
      .getAllGenre()
      .subscribe(data => this.allGenres = data);

  }

  ngOnDestroy(): void {
    
  }

}
