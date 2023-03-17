import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../interface/apiResponse';
import { Movie } from '../interface/movies';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //key e355c1a6
  //69fe1a90
  private API_URL: string ='https://www.omdbapi.com/?apikey=69fe1a90';
  
  constructor(private http: HttpClient) { }

  getMovies(searchString: string) :Observable<Movie[]>{
  //  return this.http.get(this.API_URL + '&s=' + searchString);
  return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchString}`).pipe(
    map(response =>{
      return response.Search;
    } )
  );

  }
}
