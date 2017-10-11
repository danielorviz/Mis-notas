import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-opcionesGeneral',
  templateUrl: 'opcionesGeneral.component.html',
})
export class OpcionesGeneralComponent implements OnInit {
  colorNav:string="";
  constructor(private _listaDeseos:ListaDeseosService, public navCtrl:NavController) {
    this.colorNav=this._listaDeseos.colores.colorNavbars;
   }

  ngOnInit() {}

  mostrar(){
    console.log(this.colorNav);
  }

  guardar(){
    this._listaDeseos.colores.colorNavbars=this.colorNav;
    this._listaDeseos.actualizarColores();
    this.navCtrl.pop();

  }
}
