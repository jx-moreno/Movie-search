import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinct, filter, fromEvent, map, Observable, Subscription, switchMap, tap } from 'rxjs';
import { Movie } from 'src/app/interface/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies :Movie[] =[];
  movies$!: Observable<Movie[]>;

  @ViewChild(`movieSearchInput`, { static:true }) movieSearchInput! : ElementRef

  constructor(private _movieService : MovieService){}

  ngOnInit(): void {
    
    this.movies$ = fromEvent<Event>(this.movieSearchInput.nativeElement,'keyup').pipe(
      map((event:Event) => {
        const searchTerm = (event.target as HTMLInputElement).value;
        return searchTerm;
      }),
      filter((searchTerm: string) => searchTerm.length > 3),
      debounceTime(500),
      distinct(),
      switchMap((searchTerm: string) => this._movieService.getMovies(searchTerm) )      
      )
  }


 

}
