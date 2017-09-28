import { Injectable } from '@angular/core';
import moviesList from '../sample-movies';

export interface MOVIE {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}

@Injectable()
export class InfoMoviesService {
  movies = moviesList

  constructor() { }

  getmovies(): MOVIE[] {
     return this.movies;
   }

   getMovie(id: number): MOVIE {
     let movie;
     this.movies.forEach(m => {
       if (m.id === id) { movie = m; }
     });
     return movie;
   }
 }
