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
      component:PreinscripcionComponent
    },
    {
      path: 'registro-equipo',
      component: RegistroEquipoComponent
    },
    {
      path: 'registro-jugadores',
      component: RegistroJugadoresComponent
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
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}