import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
import {AgregarComponent} from '../agregar/agregar.component';
import {OpcionesGeneralComponent} from '../opcionesGeneral/opcionesGeneral.component';
import {NavController,AlertController} from 'ionic-angular'
import {DetalleComponent} from '../detalle/detalle.component';
import {Lista} from '../../app/clases/index';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html',
})
export class ListadoComponent implements OnInit {

  mostrarEditar:boolean;
  color:string="primary";
  //colorFondo:string="background-color:#B0E0E6";
  buscar:boolean=false; // Activar o desactivar barra de buscar

  constructor(private _listaDeseos: ListaDeseosService,
    private navCtrl:NavController,
  public alertCtrl: AlertController) {  }

  ngOnInit() {}


  getColor(){
    return this.color;
  }

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
    this._listaDeseos.actualizarData();


  }
  numElementos(lista:Lista):number{
    return lista.vistaPreviaCompleta?2:lista.items.length;
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
  cambiarBuscar(){
    this.buscar=!this.buscar;
  }

irAOpciones(){
  this.navCtrl.push(OpcionesGeneralComponent);
}
}
