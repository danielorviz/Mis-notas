import { Component, OnInit } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Lista, ListaItem} from '../../app/clases/index';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:Lista;
  mostrar:boolean;
  mostrarEditar:boolean;
  nombreItem:string="";

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
            public _listaDeseos: ListaDeseosService,
          public alertCtrl: AlertController)
   {
    //  console.log(this.navParams);
     this.idx=navParams.get("idx");
     this.lista=navParams.get("lista");

   }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado= !item.completado;

    let todosMarcados = true;
    for(let item of this.lista.items){
      if(!item.completado){
        todosMarcados=false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;
    this._listaDeseos.actualizarData();
  }

  borrarElementoLista(idx:number,nombre:string) {
    let confirm = this.alertCtrl.create({
      title: 'Borrar Elemento',
      message: '¿Seguro que desea eliminar:\n'+ nombre +'?',
      buttons: ['Cancelar',
        {
          text: 'Borrar',
          handler: () => {
            //console.log('Agree clicked');

            this.lista.items.splice(idx,1);
            this._listaDeseos.actualizarData();

            //his.navCtrl.pop();

          }
        }
      ]
    });
    confirm.present();
  }

  reorderItems(indexes) {
    let element = this.lista.items[indexes.from];
    this.lista.items.splice(indexes.from, 1);
    this.lista.items.splice(indexes.to, 0, element);
    this._listaDeseos.actualizarData();
  }

  agregarItemALista(){
    if(this.nombreItem.length>0){
      this.lista.items.push(new ListaItem(this.nombreItem));
      this.mostrar=false;
      this.nombreItem="";
      this._listaDeseos.actualizarData();
    }


  }
  cambiarEstado(){
    this.mostrar=!this.mostrar;
  }
  cambiarMostrarEditar(){
    this.mostrarEditar=!this.mostrarEditar;
  }

  hayCompletadas():boolean{
    let hay:boolean=false;
    for (let i = 0; i < this._listaDeseos.listas.length; i++) {
      for (let j = 0; j < this._listaDeseos.listas[i].items.length; j++) {
          if(this._listaDeseos.listas[i].items[j].completado){
            hay=true;
            break;
          }
      }
        this._listaDeseos.listas[i].items;
    }
    return hay;
  }
}
