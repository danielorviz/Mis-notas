import {ListaItem} from './lista-item';
export class Lista{
  nombre:string;
  terminada:boolean;
  items:ListaItem[];
  vistaPreviaCompleta:boolean;

  constructor(nombre:string){
    this.nombre=nombre;
    this.terminada=false;
    this.vistaPreviaCompleta=false;
  }
}
