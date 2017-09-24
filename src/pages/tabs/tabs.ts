import { Component } from '@angular/core';

import { ListadoComponent } from '../listado/listado.component';
import {NotasComponent} from '../notas/notas.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListadoComponent;
  tab2Root = NotasComponent;

  constructor() {

  }
}
