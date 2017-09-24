import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//sqlite
import { IonicStorageModule } from '@ionic/storage';

// Servicios
import {ListaDeseosService} from './services/lista-deseos.service';
// -------------

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Pipes
import {PlaceHolderPipe} from './pipes/placeholder.pipe';
import {PendientesPipe} from './pipes/pendientes.pipe';

//--------------------

//Components
import {ListadoComponent} from '../pages/listado/listado.component';
import {NotasComponent} from '../pages/notas/notas.component';
import {AgregarComponent} from '../pages/agregar/agregar.component';
import {DetalleComponent} from '../pages/detalle/detalle.component';
import {AgregarNotaComponent} from '../pages/agregarNota/agregarNota.component';
//------------------------
@NgModule({
  declarations: [
    MyApp,
    PlaceHolderPipe,
    PendientesPipe,
    TabsPage,
    ListadoComponent,
    NotasComponent,
    AgregarComponent,
    DetalleComponent,
    AgregarNotaComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ListadoComponent,
    NotasComponent,
    AgregarComponent,
    DetalleComponent,
    AgregarNotaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
