import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { QRCodeModule } from 'angular2-qrcode';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './modules/home/home.component';
import { BodyHomeComponent } from './modules/home/body-home/body-home.component';

import { PreinscripcionComponent } from './modules/preinscripcion/preinscripcion.component';
import { RegistroPComponent } from './modules/preinscripcion/registro-p/registro-p.component';

import { RegistroJugadoresComponent } from './modules/registro-jugadores/registro-jugadores.component';
import { RegistroJComponent } from './modules/registro-jugadores/registro/registro.component';

import { RegistroEquipoComponent } from './modules/registro-equipo/registro-equipo.component';
import { RegistroEComponent } from './modules/registro-equipo/registro-e/registro-e.component';

import { CredecialCardComponent } from './modules/credencial/credecial-card/credecial-card.component';
import { CredencialComponent } from './modules/credencial/credencial.component';

import { RegistroControlPartidoComponent } from './modules/registro-control-partido/registro-control-partido.component';
import { RegistroCpComponent } from './modules/registro-control-partido/registro-cp/registro-cp.component';

import { FixtureComponent } from './modules/fixture/fixture.component';
import { BodyFixtureComponent } from './modules/fixture/body-fixture/body-fixture.component';
import { FixturePartidoComponent } from './modules/fixture/fixture-partido/fixture-partido.component';

import { LoginComponent } from './modules/login/login.component';
import { BodyLoginComponent } from './modules/login/body-login/body-login.component';

import { RegistroDelegadoComponent } from './modules/registro-delegado/registro-delegado.component';
import { RegistroFormDelegadoComponent } from './modules/registro-delegado/registro-form-delegado/registro-form-delegado.component';
import { BodyDelegadoComponent } from './modules/registro-delegado/body-delegado/body-delegado.component'

import { EquiposComponent } from './modules/equipos/equipos.component';
import { BodyEquiposComponent } from './modules/equipos/body-equipos/body-equipos.component';
import { Error404Component } from './modules/error404/error404.component';

import { ModalEquipoComponent } from './modules/equipos/modal-equipo/modal-equipo.component';
import { ControlModalComponent } from './modules/fixture/control-modal/control-modal.component';
import { VistaDelegadoComponent } from './modules/vista-delegado/vista-delegado.component';
import { VistaOrganizadorComponent } from './modules/vista-organizador/vista-organizador.component';
import { BodyVistadelegadoComponent } from './modules/vista-delegado/body-vistadelegado/body-vistadelegado.component';
import { BodyJugadoresComponent } from './modules/registro-jugadores/body-jugadores/body-jugadores.component';
import { BodyVistaOrganizadorComponent } from './modules/vista-organizador/body-vista-organizador/body-vista-organizador.component';
import { ModalOrgEquiposRegisComponent } from './modules/vista-organizador/modal-org-equipos-regis/modal-org-equipos-regis.component';

import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptorService } from './api-services/token-interceptor.service';
import { RoleDirective } from './directives/role.directive';

import { ModalCredencialDelegadoComponent } from './modules/vista-delegado/modal-credencial-delegado/modal-credencial-delegado.component';
import { EstructuraComponent } from './modules/estructura/estructura.component';
import { HeaderModulesComponent } from './modules/estructura/header-modules/header-modules.component';
import { FooterModulesComponent } from './modules/estructura/footer-modules/footer-modules.component';
import { TablaPreinsComponent } from './modules/vista-organizador/tabla-preins/tabla-preins.component';
import { PuntajePartidoComponent } from './modules/fixture/puntaje-partido/puntaje-partido.component';
import { ModalPreinscripcionComponent } from './modules/vista-organizador/modal-preinscripcion/modal-preinscripcion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreinscripcionComponent,
    RegistroEquipoComponent,
    RegistroJugadoresComponent, 
    RegistroJComponent,
    RegistroPComponent,  
    RegistroEComponent,
    CredencialComponent,
    
    CredecialCardComponent,
    BodyHomeComponent,
    RegistroControlPartidoComponent,

    RegistroCpComponent,
    FixtureComponent,
    BodyFixtureComponent,
    LoginComponent,
    
    BodyLoginComponent,
    FixturePartidoComponent,
    RegistroDelegadoComponent,
        
    RegistroFormDelegadoComponent,
    EquiposComponent,
    BodyEquiposComponent,    
    
    Error404Component,
    BodyDelegadoComponent,
    ModalEquipoComponent,
    ControlModalComponent,
    VistaDelegadoComponent,
    VistaOrganizadorComponent,
    
    BodyVistadelegadoComponent,
    BodyJugadoresComponent,
    BodyVistaOrganizadorComponent,
      
    ModalOrgEquiposRegisComponent,
    RoleDirective,

    ModalCredencialDelegadoComponent,
    EstructuraComponent,
    HeaderModulesComponent,
    FooterModulesComponent,
    TablaPreinsComponent,
    PuntajePartidoComponent,
    ModalPreinscripcionComponent,
    
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
  providers: [ CookieService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


