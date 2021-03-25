import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //son los componentes que yo puedo utilizar
    AppComponent
  ],
  imports: [  //son los modulos que yo puedo utilizar. Pueden tener componentes, clases, interfaces, otros modulos. 
              //si el modulo tiene componentes debe estar declarado arriba para poder usarlos.
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //son los servicios, conexión a base
  bootstrap: [AppComponent]
})
export class AppModule { }
