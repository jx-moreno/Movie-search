import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modules
import{HttpClientModule}from '@angular/common/http';


//components
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
