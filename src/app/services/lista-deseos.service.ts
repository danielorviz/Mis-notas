import { Injectable } from '@angular/core';
import {Lista,Nota} from '../clases/index';
import { Storage } from '@ionic/storage';

@Injectable()
export class ListaDeseosService {
  listas: Lista[] =[];
  notas:Nota[]=[];
  colores={
    colorNavbars:"primary",
    colorFondo:"azulClaro"
  }

  constructor( private storage:Storage) {
    //  this.actualizarColores();
    this.cargarColores();
    this.cargarData();
   }

  actualizarData(){
    this.storage.set('listas',this.listas);
    this.storage.set('notas',this.notas);


  }
  actualizarColores(){
      this.storage.set('color',this.colores);
  }
  cargarColores(){
    this.storage.get('color').then((colors) =>{
      if(colors !=null){
        this.colores=colors;
      }
    });
  }

  cargarData(){
    this.storage.get('listas').then((val) => {
      if(val !=null){
        this.listas=val;
    }


  });
  this.storage.get("notas").then((notes) =>{
    if(notes !=null){
      this.notas=notes;
    }
  });


  }

  agregarLista(lista:Lista){
    this.listas.push(lista);
    this.actualizarData();
  }
  eliminarLista(idx:number){
    this.listas.splice(idx,1);
    this.actualizarData();
  }

  agregarNota(nota:Nota){
    this.notas.push(nota);
    this.actualizarData();
  }
  eliminarNota(idx:number){
    this.notas.splice(idx,1);
    this.actualizarData();
  }

  noTerminadas():number{
    let cont=0;
    for(let lista of this.listas){
      if(!lista.terminada){
        cont++;
      }
    }
    return cont;
  }


}
