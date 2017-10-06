import { Component, OnInit } from '@angular/core';
import {NavParams,NavController} from 'ionic-angular';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-opcionesGeneral',
  templateUrl: 'opcionesGeneral.component.html',
})
export class OpcionesGeneralComponent implements OnInit {
  colorNav:string="";
  constructor(private _listaDeseos:ListaDeseosService, public navCtrl:NavController) {
    this.colorNav=this._listaDeseos.colores.getColorNavbars();
   }

  ngOnInit() {}

  mostrar(){
    console.log(this.colorNav);
  }

  guardar(){
    this._listaDeseos.colores.setColorNavbars(this.colorNav);
    this.navCtrl.pop();

  }
}
