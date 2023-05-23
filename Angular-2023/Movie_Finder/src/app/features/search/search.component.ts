import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovies } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  foundResults: IMovies;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let myQuery: string;
    this.route.queryParams.subscribe(params => myQuery = params['query']);
    this.moviesService.getMoviesByQuery(myQuery!).subscribe(data => {
      if (data.results.length != 0) {
        this.foundResults = data;
      }
    });

  };



}
