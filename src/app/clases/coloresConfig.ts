export class ColoresConfig{

  colorNavbars:string;
  colorFondo:string;

  constructor(){
    this.setDefault();
  }

  setDefault(){
    this.colorFondo="background:#B0E0E6";
    this.colorNavbars="primary";
  }

  getColorNavbars(){
    return this.colorNavbars;
  }
  setColorNavbars(color:string){
    this.colorNavbars=color;
  }

}
