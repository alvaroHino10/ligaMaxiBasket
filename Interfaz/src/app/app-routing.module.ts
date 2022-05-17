import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { PreinscripcionComponent } from "./modules/preinscripcion/preinscripcion.component";
import { RegistroJugadoresComponent } from "./modules/registro-jugadores/registro-jugadores.component";
import { RegistroEquipoComponent } from "./modules/registro-equipo/registro-equipo.component";
import { HomeComponent } from "./modules/home/home.component";
import { CredencialComponent } from "./modules/credencial/credencial.component";


const routes: Routes = [

    /*{path: '', pathMatch:'full', redirectTo: 'registro-p'},
    {path:'registro-p', component: RegistroPComponent},*/
    /*{
      path: '',
      pathMatch: 'full',
      component: HomeComponent
    },*/
    {
      path:'preinscripcion',
      component:PreinscripcionComponent
    },
    {
      path: 'registro-jugadores',
      component: RegistroJugadoresComponent,
    },
    {
      path: 'registro-equipo',
      component: RegistroEquipoComponent,
    },
    {
      path: 'credencial',
      component: CredencialComponent,
    },
    {
      path:'',
      component:HomeComponent,
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}