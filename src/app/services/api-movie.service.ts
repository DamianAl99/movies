import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiMovieService {

  public apiKey: string = 'bea683e9';
  public api: string;
  public detailApi: string;

  constructor(private _http: HttpClient) {
    this.api = `https://www.omdbapi.com/?apikey=${this.apiKey}&s=`;
    this.detailApi = `https://www.omdbapi.com/?apikey=${this.apiKey}&t=`
  };

  getMovies(movieName): Observable<any>{
    return this._http.get(this.api+movieName);
  };

  getMovie(Name): Observable<any>{
    return this._http.get(this.detailApi+Name);
  }
}
