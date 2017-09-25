import { Component, OnInit } from '@angular/core';
import {Nota} from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
@Component({
  selector: 'app-detalleNota',
  templateUrl: 'detalleNota.component.html',
})
export class DetalleNotaComponent implements OnInit {
  nota:Nota;
  idx:number;
  constructor() {  }

  ngOnInit() {}
}
