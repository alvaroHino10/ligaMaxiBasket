import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { PreinscripcionComponent } from "./modules/preinscripcion/preinscripcion.component";
/*import { AgregarEmpleadoComponent } from "./components/agregar-empleado/agregar-empleado.component";
import { EditarEmpleadoComponent } from "./components/editar-empleado/editar-empleado.component";
import { ListarEmpleadoComponent } from "./components/listar-empleado/listar-empleado.component";*/

import { RegistroPComponent } from "./modules/preinscripcion/registro-p/registro-p.component";
import { RegistroJugadoresComponent } from "./modules/registro-jugadores/registro-jugadores.component";
import { HomeComponent } from "./modules/home/home.component";

const routes: Routes = [
    /*{path: '', pathMatch:'full', redirectTo: 'agregar-empleado'},
    {path: 'agregar-empleado', component:AgregarEmpleadoComponent},
    {path: 'listar-empleado', component:ListarEmpleadoComponent},
    {path: 'editar-empleado/:id', component:EditarEmpleadoComponent},


    {path: '', pathMatch:'full', redirectTo: 'registro-p'},
    {path:'registro-p', component: RegistroPComponent}*/
    {
      path: '',
      pathMatch: 'full',
      component: HomeComponent
    },
    {
      path:'post/:1',
      component:PreinscripcionComponent
    },
    {
      path: 'registro-jugadores',
      component: RegistroJugadoresComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}