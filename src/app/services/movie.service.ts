import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseURL = "https://api.themoviedb.org/3";
  private apikey = "06cc335abc6769f2ba982c824990faeb";
  Movies!: Movies;


  constructor(private http: HttpClient) { }


  sliderMovies (): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseURL}/movie/now_playing?api_key=${this.apikey}`);
  }

  getTopRated(): Observable<Movies>{
    return this.http.get<Movies>(`${this.baseURL}/movie/top_rated?api_key=${this.apikey}`)
  }
}
