import { FixtureComponent } from './modules/fixture/fixture.component';
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { PreinscripcionComponent } from "./modules/preinscripcion/preinscripcion.component";
import { RegistroJugadoresComponent } from "./modules/registro-jugadores/registro-jugadores.component";
import { RegistroEquipoComponent } from "./modules/registro-equipo/registro-equipo.component";
import { HomeComponent } from "./modules/home/home.component";
import { CredencialComponent } from "./modules/credencial/credencial.component";
import { RegistroControlPartidoComponent } from "./modules/registro-control-partido/registro-control-partido.component";
import { LoginComponent } from "./modules/login/login.component";
import { RegistroDelegadoComponent } from './modules/registro-delegado/registro-delegado.component';
import { EquiposComponent } from './modules/equipos/equipos.component'
import { Error404Component } from './modules/error404/error404.component';
import { VigilanteGuard } from './guards/vigilante.guard';
import { VistaDelegadoComponent } from './modules/vista-delegado/vista-delegado.component';
import { VistaJugadorComponent } from './modules/vista-jugador/vista-jugador.component';
import { VistaOrganizadorComponent } from './modules/vista-organizador/vista-organizador.component';

const routes: Routes = [

    /*{path: '', pathMatch:'full', redirectTo: 'registro-delegado'},
    {path:'registro-delegado', component: RegistroDelegadoComponent},
    {
      path: '',
      pathMatch: 'full',
      component: RegistroDelegadoComponent
    },*/

    {
      path:'registro-delegado',
      component:RegistroDelegadoComponent,
    },
    {
      path:'preinscripcion',
      component:PreinscripcionComponent,
      canActivate: [VigilanteGuard]
    },
    {
      path: 'registro-equipo',
      component: RegistroEquipoComponent,
      canActivate: [VigilanteGuard]
    },
    {
      path: 'registro-jugadores',
      component: RegistroJugadoresComponent,
      canActivate: [VigilanteGuard]
    },
    {
      path: 'registro-control-partido',
      component: RegistroControlPartidoComponent
    },
    {
      path: 'credencial',
      component: CredencialComponent
    },
    {
      path:'',
      component:HomeComponent
    },
    {
      path:'fixture',
      component:FixtureComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'equipos',
      component: EquiposComponent
    },
    {
      path:'vista-organizador',
      component: VistaOrganizadorComponent  
    },
    {
      path:'vista-jugador',
      component: VistaJugadorComponent
    },
    {
      path:'vista-delegado',
      component: VistaDelegadoComponent
    },
    {
      path:'error404',
      component: Error404Component
    }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}