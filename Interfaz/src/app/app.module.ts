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
import { RegistroJComponent } from './modules/registro-jugadores/registro/registro.component';
import { FooterComponent } from './modules/registro-jugadores/footer/footer.component';
import { NavegadorPComponent } from './modules/preinscripcion/navegador-p/navegador-p.component';
import { RegistroPComponent } from './modules/preinscripcion/registro-p/registro-p.component';
import { FooterPComponent } from './modules/preinscripcion/footer-p/footer-p.component';
import { HeaderPComponent } from './modules/preinscripcion/header-p/header-p.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroEComponent } from './modules/registro-equipo/registro-e/registro-e.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterEComponent } from './modules/registro-equipo/footer-e/footer-e.component';
import { HeaderEComponent } from './modules/registro-equipo/header-e/header-e.component';
import { NavegadorEComponent } from './modules/registro-equipo/navegador-e/navegador-e.component';
import { CredencialComponent } from './modules/credencial/credencial.component';
import { FooterCreComponent } from './modules/credencial/footer-cre/footer-cre.component';
import { HeaderCreComponent } from './modules/credencial/header-cre/header-cre.component';
import { NavCreComponent } from './modules/credencial/nav-cre/nav-cre.component';
import { CredecialCardComponent } from './modules/credencial/credecial-card/credecial-card.component';

import { QRCodeModule } from 'angular2-qrcode';
import { FooterHomeComponent } from './modules/home/footer-home/footer-home.component';
import { HeaderHomeComponent } from './modules/home/header-home/header-home.component';
import { BodyHomeComponent } from './modules/home/body-home/body-home.component';
import { RegistroControlPartidoComponent } from './modules/registro-control-partido/registro-control-partido.component';
import { FooterCpComponent } from './modules/registro-control-partido/footer-cp/footer-cp.component';
import { HeaderCpComponent } from './modules/registro-control-partido/header-cp/header-cp.component';
import { NavegadorCpComponent } from './modules/registro-control-partido/navegador-cp/navegador-cp.component';
import { RegistroCpComponent } from './modules/registro-control-partido/registro-cp/registro-cp.component';
import { FixtureComponent } from './modules/fixture/fixture.component';
import { HeaderFixtureComponent } from './modules/fixture/header-fixture/header-fixture.component';
import { BodyFixtureComponent } from './modules/fixture/body-fixture/body-fixture.component';
import { FooterFixtureComponent } from './modules/fixture/footer-fixture/footer-fixture.component';


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
    RegistroJComponent,
    FooterComponent,
    NavegadorPComponent,
    RegistroPComponent,
    FooterPComponent,
    HeaderPComponent,
    RegistroEComponent,
    FooterEComponent,
    HeaderEComponent,
    NavegadorEComponent,
    CredencialComponent,
    FooterCreComponent,
    HeaderCreComponent,
    NavCreComponent,
    CredecialCardComponent,
    FooterHomeComponent,
    HeaderHomeComponent,
    BodyHomeComponent,
    RegistroControlPartidoComponent,
    FooterCpComponent,
    HeaderCpComponent,
    NavegadorCpComponent,
    RegistroCpComponent,
    FixtureComponent,
    HeaderFixtureComponent,
    BodyFixtureComponent,
    FooterFixtureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    QRCodeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


