import { Component, OnInit } from '@angular/core';
import {Nota} from '../../app/clases/index';
import { AlertController, NavController,NavParams } from 'ionic-angular';
@Component({
  selector: 'app-detalleNota',
  templateUrl: 'detalleNota.component.html',
})
export class DetalleNotaComponent implements OnInit {
  nota:Nota;
  idx:number;
  constructor(public navParam:NavParams) {
    this.nota=navParam.get("nota");
    this.idx=navParam.get("idx");
    console.log(this.nota.titulo);
  }

  ngOnInit() {}
}
