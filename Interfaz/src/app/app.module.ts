import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { InscripcionComponent } from './modules/inscripcion/inscripcion.component';
import { PreinscripcionComponent } from './modules/preinscripcion/preinscripcion.component';
import { RegistroEquipoComponent } from './modules/registro-equipo/registro-equipo.component';
import { RegistroJugadoresComponent } from './modules/registro-jugadores/registro-jugadores.component';
import { RegistroResponsableComponent } from './modules/registro-responsable/registro-responsable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscripcionComponent,
    PreinscripcionComponent,
    RegistroEquipoComponent,
    RegistroJugadoresComponent,
    RegistroResponsableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
