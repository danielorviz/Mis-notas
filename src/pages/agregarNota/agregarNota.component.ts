import { Component, OnInit } from '@angular/core';
import {Platform,NavController,NavParams} from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import {Nota} from '../../app/clases/index';


@Component({
  selector: 'app-agregarNota',
  templateUrl: 'agregarNota.component.html',
})
export class AgregarNotaComponent implements OnInit {
  nota:Nota;
  idx:number;

  constructor(private platform:Platform,
  private _listaDeseos:ListaDeseosService,
    public navCrl:NavController,
  public navParams:NavParams) {
    this.nota=navParams.get("nota");
    this.idx=navParams.get("idx");
   }

  ngOnInit() {

  }



guardarNota(){

}
guardar(titulo:string,texto:string){
  // if(this.nota==null){
  //   this.nota = new Nota();
  // }
  console.log(titulo);
  console.log(texto);
}

}
