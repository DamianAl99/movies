import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public inputTextModel: string;
  //es para retener aqui el valor del ngModel
  public inputValorUno: string;
  //es para pasar el valor del ngModel a esta variable
  title = 'api';
  public status: boolean;

  constructor(public _route: ActivatedRoute){
    this.inputTextModel = '';
    this.inputValorUno = '';
    /*this._route.subscribe(url => {
      console.log(url);
    });*/
    this.status = false;
  }

  ngOnInit(){

  }
    
  
 /* hideStatus(){
    if(this.status==false){
      this.status = true;
    }else{
      this.status = false;
    }
  }*/

  keyupp(){
    //al presionar enter que haga esta function
    if(this.inputTextModel){
      //si exite algo en el ngModel
      this.inputValorUno = this.inputTextModel;
      //pasar el valor guardado del ngModel al inputValorUno
    }
  }
}
