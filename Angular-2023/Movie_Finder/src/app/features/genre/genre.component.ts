import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovies } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})

export class GenreComponent implements OnInit {
  moviesByGenre: IMovies;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((par) => {
      let genreId = par['id'];
      this.moviesService
        .getMoviesByGenreId(genreId)
        .subscribe(data => this.moviesByGenre = data);
    })
  }
}
