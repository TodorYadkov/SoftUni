import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetails } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movieDetails: IMovieDetails

  constructor(
    private route: ActivatedRoute,
    private movieServices: MoviesService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.movieServices.getMovieById(id).subscribe((movie) => this.movieDetails = movie);
    });
    
  }
}
