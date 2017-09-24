import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
import {AgregarComponent} from '../agregar/agregar.component';
import {NavController,AlertController} from 'ionic-angular'
import {DetalleComponent} from '../detalle/detalle.component';
import {Lista} from '../../app/clases/index';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html',
})
export class ListadoComponent implements OnInit {

  mostrarEditar:boolean;

  constructor(private _listaDeseos: ListaDeseosService,
    private navCtrl:NavController,
  public alertCtrl: AlertController) {  }

  ngOnInit() {}



  irAgregar(){
    this.navCtrl.push(AgregarComponent);
  }
  verDetalle(lista:any, idx:number){
    this.navCtrl.push(DetalleComponent,{
      lista:lista,
      idx:idx
    });
  }

  mas(lista:Lista){
    lista.vistaPreviaCompleta=!lista.vistaPreviaCompleta;

  }
  numElementos(lista:Lista):number{
    return lista.vistaPreviaCompleta?lista.items.length:2;
  }

  borrarLista(idx:number) {
    let confirm = this.alertCtrl.create({
      title: 'Borrar Lista',
      message: '¿Seguro que desea eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Borrar',
          handler: () => {
            //console.log('Agree clicked');
            this._listaDeseos.eliminarLista(idx);
            //this.navCtrl.pop();

          }
        }
      ]
    });
    confirm.present();
  }

  cambiarMostrarEditar(){
    this.mostrarEditar=!this.mostrarEditar;
  }

}
