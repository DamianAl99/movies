import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
//para que anden los inputs y demas formularios
import { HttpClientModule } from '@angular/common/http';
//para que ande el httpclient de los servicios.
import { routing, appRoutingProviders } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    DetailMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
