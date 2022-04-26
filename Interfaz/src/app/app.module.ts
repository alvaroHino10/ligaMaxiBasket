import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { PreinscripcionComponent } from './modules/preinscripcion/preinscripcion.component';
import { RegistroEquipoComponent } from './modules/registro-equipo/registro-equipo.component';
import { RegistroJugadoresComponent } from './modules/registro-jugadores/registro-jugadores.component';
import { RegistroResponsableComponent } from './modules/registro-responsable/registro-responsable.component';
import { HeaderComponent } from './modules/registro-jugadores/header/header.component';
import { NavegadorComponent } from './modules/registro-jugadores/navegador/navegador.component';
import { RegistroComponent } from './modules/registro-jugadores/registro/registro.component';
import { FooterComponent } from './modules/registro-jugadores/footer/footer.component';
import { NavegadorPComponent } from './modules/preinscripcion/navegador-p/navegador-p.component';
import { RegistroPComponent } from './modules/preinscripcion/registro-p/registro-p.component';
import { FooterPComponent } from './modules/preinscripcion/footer-p/footer-p.component';
import { HeaderPComponent } from './modules/preinscripcion/header-p/header-p.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreinscripcionComponent,
    RegistroEquipoComponent,
    RegistroJugadoresComponent,
    RegistroResponsableComponent,
    HeaderComponent,
    NavegadorComponent,
    RegistroComponent,
    FooterComponent,
    NavegadorPComponent,
    RegistroPComponent,
    FooterPComponent,
    HeaderPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
