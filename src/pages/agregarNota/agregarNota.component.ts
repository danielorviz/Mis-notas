import { Component, OnInit } from '@angular/core';
import {AlertController,NavController,NavParams} from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import {Nota} from '../../app/clases/index';


@Component({
  selector: 'app-agregarNota',
  templateUrl: 'agregarNota.component.html',
})
export class AgregarNotaComponent implements OnInit {
  nota:Nota;
  idx:number;
  tituloNota:string="";
  textoNota:string="";
  textoAgregado:boolean=false;

  constructor(
  private _listaDeseos:ListaDeseosService,
    public navCrl:NavController,
  public navParams:NavParams,
  public alertCtrl:AlertController) {
    this.nota=navParams.get("nota");
    this.idx=navParams.get("idx");
   }

  ngOnInit() {

  }



guardarNota(){
  if(this.tituloNota.length == 0 && this.textoNota.length==0){
    let alert = this.alertCtrl.create({
      title: 'Nota vacia',
      subTitle: 'El titulo o texto de la nota es necesario',
      buttons: ['Aceptar']
    });
    alert.present();
    return;
  }
this._listaDeseos.agregarNota(new Nota(this.tituloNota,this.textoNota));
this.navCrl.pop();
}
activarAgregar(){
  this.textoAgregado=true;

}

}
