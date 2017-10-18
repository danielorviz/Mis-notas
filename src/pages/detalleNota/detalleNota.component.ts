import { Component, OnInit } from '@angular/core';
import {Nota} from '../../app/clases/index';
import { NavController,NavParams } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalleNota',
  templateUrl: 'detalleNota.component.html',
})
export class DetalleNotaComponent implements OnInit {
  nota:Nota;
  idx:number;
  textoAgregado:boolean=false;
  textoNota:string="";
  tituloNota:string="";
  constructor(public navParam:NavParams,public navCtrl:NavController,
        private _listaDeseos:ListaDeseosService) {
    this.nota=navParam.get("nota");
    this.idx=navParam.get("idx");
    console.log(this.nota.titulo);
  }

  ngOnInit() {
    this.textoNota=this.nota.contenido;
    this.tituloNota=this.nota.titulo;
  }

  activarBoton(){
    this.textoAgregado=true;
  }

  guardarNota(){
    if(this.textoNota.length!=0){
      this.nota.contenido = this.textoNota;
      this.nota.titulo=this.tituloNota;
      this._listaDeseos.actualizarData();
      this.textoAgregado=false;
      this.navCtrl.pop();

    }
  }
}
