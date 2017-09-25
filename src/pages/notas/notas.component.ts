import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular'
import {Nota} from '../../app/clases/index';


import {AgregarNotaComponent} from '../agregarNota/agregarNota.component';
import {DetalleNotaComponent} from '../detalleNota/detalleNota.component';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';


@Component({
  selector: 'app-notas',
  templateUrl: 'notas.component.html',
})
export class NotasComponent implements OnInit {


  constructor(private _listaDeseos: ListaDeseosService,
    public navCtrl:NavController) {

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



}
