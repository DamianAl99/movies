import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './components/movies/movies.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'detail/:name', component: DetailMovieComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);




