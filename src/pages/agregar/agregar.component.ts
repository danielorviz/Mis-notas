import { Component, OnInit } from '@angular/core';
import {Lista,ListaItem} from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string="";
  nombreItem:string = "";


  items:ListaItem [] =[];

  constructor(public _listaDeseos:ListaDeseosService,
          public navCtrl:NavController,
          public alertCtrl:AlertController) {  }

  ngOnInit() {}

  agregarItem(){
    if(this.nombreItem.length==0){
      return;
    }

    let item = new ListaItem(this.nombreItem);
    this.items.push(item);
    this.nombreItem="";

  }

  borrarItem(index:number){
    if(this.items.length>0){
      this.items.splice(index,1);
    }
  }

  guardarLista(){
    if(this.nombreLista.length == 0){
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista es necesario',
        buttons: ['Aceptar']
      });
      alert.present();
      return;
    }
    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    this._listaDeseos.agregarLista(lista);
    this.navCtrl.pop();
  }
}
