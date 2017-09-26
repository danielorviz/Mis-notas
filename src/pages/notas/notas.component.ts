import { Component, OnInit } from '@angular/core';
import {NavController,AlertController} from 'ionic-angular'
import {Nota} from '../../app/clases/index';


import {AgregarNotaComponent} from '../agregarNota/agregarNota.component';
import {DetalleNotaComponent} from '../detalleNota/detalleNota.component';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';


@Component({
  selector: 'app-notas',
  templateUrl: 'notas.component.html',
})
export class NotasComponent implements OnInit {

  mostrarEditar:boolean=false;

  constructor(private _listaDeseos: ListaDeseosService,
    public navCtrl:NavController, public alertCtrl:AlertController) {

     }

  ngOnInit() {}

  irDetalleNota(nota:Nota,idx:number){
    console.log(nota.titulo);
    this.navCtrl.push(DetalleNotaComponent,{
      nota:nota,
      idx:idx
    })
   }
irAgregarNota(){
    this.navCtrl.push(AgregarNotaComponent);
}
borrarNota(idx:number){
  let confirm = this.alertCtrl.create({
    title: 'Borrar Nota',
    message: '¿Seguro que desea eliminar la nota?',
    buttons: ['Cancelar',
      {
        text: 'Borrar',
        handler: () => {
          this._listaDeseos.notas.splice(idx,1);
          this._listaDeseos.actualizarData();

        }
      }
    ]
  });
  confirm.present();

}
cambiarEditar(){
  this.mostrarEditar=!this.mostrarEditar;
}

}
