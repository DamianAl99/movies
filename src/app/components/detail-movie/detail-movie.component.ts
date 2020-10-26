import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiMovieService } from '../../services/api-movie.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css'],
  providers: [ApiMovieService],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({backgroundColor: 'transparent', opacity: 0}),
        animate(2000, style({backgroundColor: 'rgb(18, 28, 59)', opacity: 1}))
      ]),
    ])
  ]
})
export class DetailMovieComponent implements OnInit {

  public name: string;
  public item: any;

  constructor(public _route: ActivatedRoute,
              public _apiDetail: ApiMovieService) {
                this._route.params.subscribe(params => {
                  console.log(params.name);
                  this.name = params.name;
                  this._apiDetail.getMovie(this.name).subscribe(
                    res => {
                       this.item = res;
                       console.log(this.item);
                    },
                    err => {
                      console.log(err);
                    }
                   )
                  //params.name porque el params me devuelve un objeto con un name y lo que queremos utilizar es el name
                });
              }

  ngOnInit(): void {
  }

}
