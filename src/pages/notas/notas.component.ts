import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular'
import {Nota} from '../../app/clases/index';


import {AgregarNotaComponent} from '../agregarNota/agregarNota.component';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';


@Component({
  selector: 'app-notas',
  templateUrl: 'notas.component.html',
})
export class NotasComponent implements OnInit {
  constructor(private _listaDeseos: ListaDeseosService,
    private navCtrl:NavController) {  }

  ngOnInit() {}





  irAgregarNota(nota:Nota,idx:number){
    this.navCtrl.push(AgregarNotaComponent,{
      nota:nota,
      idx:idx
    });
   }
}
