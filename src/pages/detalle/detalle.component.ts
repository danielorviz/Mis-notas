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

  agregarItemALista(lista:Lista,nombre:string){
    lista.items.push(new ListaItem(nombre));
    this.mostrar=false;

  }
  cambiarEstado(){
    this.mostrar=!this.mostrar;
  }
  cambiarMostrarEditar(){
    this.mostrarEditar=!this.mostrarEditar;
  }
}