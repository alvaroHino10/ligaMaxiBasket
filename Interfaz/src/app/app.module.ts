import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angular2-qrcode';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './modules/home/home.component';
import { FooterHomeComponent } from './modules/home/footer-home/footer-home.component';
import { HeaderHomeComponent } from './modules/home/header-home/header-home.component';
import { BodyHomeComponent } from './modules/home/body-home/body-home.component';

import { PreinscripcionComponent } from './modules/preinscripcion/preinscripcion.component';
import { NavegadorPComponent } from './modules/preinscripcion/navegador-p/navegador-p.component';
import { RegistroPComponent } from './modules/preinscripcion/registro-p/registro-p.component';
import { FooterPComponent } from './modules/preinscripcion/footer-p/footer-p.component';
import { HeaderPComponent } from './modules/preinscripcion/header-p/header-p.component';

import { RegistroJugadoresComponent } from './modules/registro-jugadores/registro-jugadores.component';
import { RegistroJComponent } from './modules/registro-jugadores/registro/registro.component';
import { FooterComponent } from './modules/registro-jugadores/footer/footer.component';
import { HeaderComponent } from './modules/registro-jugadores/header/header.component';
import { NavegadorComponent } from './modules/registro-jugadores/navegador/navegador.component';

import { RegistroEquipoComponent } from './modules/registro-equipo/registro-equipo.component';
import { RegistroEComponent } from './modules/registro-equipo/registro-e/registro-e.component';
import { FooterEComponent } from './modules/registro-equipo/footer-e/footer-e.component';
import { HeaderEComponent } from './modules/registro-equipo/header-e/header-e.component';
import { NavegadorEComponent } from './modules/registro-equipo/navegador-e/navegador-e.component';

import { CredecialCardComponent } from './modules/credencial/credecial-card/credecial-card.component';
import { CredencialComponent } from './modules/credencial/credencial.component';
import { FooterCreComponent } from './modules/credencial/footer-cre/footer-cre.component';
import { HeaderCreComponent } from './modules/credencial/header-cre/header-cre.component';
import { NavCreComponent } from './modules/credencial/nav-cre/nav-cre.component';

import { RegistroControlPartidoComponent } from './modules/registro-control-partido/registro-control-partido.component';
import { FooterCpComponent } from './modules/registro-control-partido/footer-cp/footer-cp.component';
import { HeaderCpComponent } from './modules/registro-control-partido/header-cp/header-cp.component';
import { NavegadorCpComponent } from './modules/registro-control-partido/navegador-cp/navegador-cp.component';
import { RegistroCpComponent } from './modules/registro-control-partido/registro-cp/registro-cp.component';

import { FixtureComponent } from './modules/fixture/fixture.component';
import { HeaderFixtureComponent } from './modules/fixture/header-fixture/header-fixture.component';
import { BodyFixtureComponent } from './modules/fixture/body-fixture/body-fixture.component';
import { FooterFixtureComponent } from './modules/fixture/footer-fixture/footer-fixture.component';
import { FixturePartidoComponent } from './modules/fixture/fixture-partido/fixture-partido.component';

import { LoginComponent } from './modules/login/login.component';
import { HeaderLoginComponent } from './modules/login/header-login/header-login.component';
import { FooterLoginComponent } from './modules/login/footer-login/footer-login.component';
import { BodyLoginComponent } from './modules/login/body-login/body-login.component';

import { RegistroDelegadoComponent } from './modules/registro-delegado/registro-delegado.component';
import { FooterDelegadoComponent } from './modules/registro-delegado/footer-delegado/footer-delegado.component';
import { HeaderDelegadoComponent } from './modules/registro-delegado/header-delegado/header-delegado.component';
import { NavegadorDelegadoComponent } from './modules/registro-delegado/navegador-delegado/navegador-delegado.component';
import { RegistroFormDelegadoComponent } from './modules/registro-delegado/registro-form-delegado/registro-form-delegado.component';
import { BodyDelegadoComponent } from './modules/registro-delegado/body-delegado/body-delegado.component'

import { EquiposComponent } from './modules/equipos/equipos.component';
import { BodyEquiposComponent } from './modules/equipos/body-equipos/body-equipos.component';
import { FooterEquiposComponent } from './modules/equipos/footer-equipos/footer-equipos.component';
import { HeaderEquiposComponent } from './modules/equipos/header-equipos/header-equipos.component';
import { Error404Component } from './modules/error404/error404.component';

import { CookieService } from 'ngx-cookie-service';
import { AccesoDelegadoDirective } from './directives/acceso-delegado.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreinscripcionComponent,
    RegistroEquipoComponent,
    RegistroJugadoresComponent,
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
    FooterFixtureComponent,
    LoginComponent,
    HeaderLoginComponent,
    FooterLoginComponent,
    BodyLoginComponent,
    FixturePartidoComponent,
    RegistroDelegadoComponent,
    FooterDelegadoComponent,
    HeaderDelegadoComponent,
    NavegadorDelegadoComponent,
    RegistroFormDelegadoComponent,
    EquiposComponent,
    BodyEquiposComponent,
    FooterEquiposComponent,
    HeaderEquiposComponent,
    Error404Component,
    BodyDelegadoComponent,
    AccesoDelegadoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    QRCodeModule,
    HttpClientModule,
    NgbModule,
    NgxCaptchaModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


