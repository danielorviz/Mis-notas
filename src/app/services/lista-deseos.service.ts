import { Injectable } from '@angular/core';
import {Lista,Nota} from '../clases/index';
import { Storage } from '@ionic/storage';

@Injectable()
export class ListaDeseosService {
  listas: Lista[] =[];
  notas:Nota[]=[];

  constructor( private storage:Storage

  ) {
    this.cargarData();
    // let lista1:Lista = new Lista('Compras de supermercado');
    // let lista2:Lista = new Lista('Juegos que deseo');
    // let lista3:Lista = new Lista('cosas de la universidad');
    //
    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);
    console.log("Servicio inicializado")
   }

  actualizarData(){
    //localStorage.setItem("data",JSON.stringify(this.listas));
    this.storage.set('listas',this.listas);
    this.storage.set('notas',this.notas);

  }

  cargarData(){
    // if(localStorage.getItem("data")!=null){
    //   this.listas= JSON.parse(localStorage.getItem("data"));
    // }


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
