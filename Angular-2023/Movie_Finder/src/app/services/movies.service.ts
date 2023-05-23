import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGenres, IMovieDetails, IMovies } from '../models/movies.interface';


const apiKey = '1bbbad77ea40c08a442a251ac77c9ccc';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path: string = 'https://api.themoviedb.org/3/';
  authLastPlace: string = '&api_key=';
  authFirstPlace: string = '?api_key=';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  topRated: string = 'discover/movie?sort_by=vote_count.desc';
  genre: string = 'genre/movie/list';
  genreMovies: string = 'discover/movie?with_genres=';
  movie: string = 'movie/';
  search: string = 'search/movie?query=';

  constructor(private http: HttpClient) { }


  getPopular(): Observable<IMovies> {
    return this.http.get<IMovies>(`${this.path}${this.popular}${this.authLastPlace}${apiKey}`);
  }

  getTopRated(): Observable<IMovies> {
    return this.http.get<IMovies>(`${this.path}${this.topRated}${this.authLastPlace}${apiKey}`);
  }

  getAllGenre(): Observable<IGenres> {
    return this.http.get<IGenres>(`${this.path}${this.genre}${this.authFirstPlace}${apiKey}`)
  }

  getMovieById(id: string): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`${this.path}${this.movie}${id}${this.authFirstPlace}${apiKey}`)
  }

  getMoviesByGenreId(genreId: string): Observable<IMovies> {
    return this.http.get<IMovies>(`${this.path}${this.genreMovies}${genreId}${this.authLastPlace}${apiKey}`);
  }

  getMoviesByQuery(myQuery: string): Observable<IMovies> {
    return this.http.get<IMovies>(`${this.path}${this.search}${myQuery}${this.authLastPlace}${apiKey}`);
  }

}
