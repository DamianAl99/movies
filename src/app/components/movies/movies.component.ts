import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMovieService } from '../../services/api-movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [ApiMovieService]
})
export class MoviesComponent implements OnChanges {

  public data: string;

  @Input() valor_uno: string;

  constructor(private _api: ApiMovieService) {
      this.data = '';;
  };

  ngOnChanges(): void {
      this.getMovie();
      //cada vez que ocurra un cambio va a pedir algo a la api
  }

  getMovie(){
    return this._api.getMovies(this.valor_uno).subscribe(
      res => {
        this.data = res.Search;
        //la data contiene la respuesta del get que se hizo en el servicio
        //el res contiene todos los arrays y con mas objetos, el search contiene cada array y lo que necesitamos
        //entonces si hacemos un for del array, debemos de pedir el nombre o titulo para no extender los puntos
        console.log(this.data);
      },
      err => {
        console.log(<any>err);
      }
    );
  };

}
