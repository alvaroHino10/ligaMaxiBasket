import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
/*import { AgregarEmpleadoComponent } from "./components/agregar-empleado/agregar-empleado.component";
import { EditarEmpleadoComponent } from "./components/editar-empleado/editar-empleado.component";
import { ListarEmpleadoComponent } from "./components/listar-empleado/listar-empleado.component";*/

import { RegistroPComponent } from "./modules/preinscripcion/registro-p/registro-p.component";

const routes: Routes = [
    /*{path: '', pathMatch:'full', redirectTo: 'agregar-empleado'},
    {path: 'agregar-empleado', component:AgregarEmpleadoComponent},
    {path: 'listar-empleado', component:ListarEmpleadoComponent},
    {path: 'editar-empleado/:id', component:EditarEmpleadoComponent},*/


    {path: '', pathMatch:'full', redirectTo: 'registro-p'},
    {path:'registro-p', component: RegistroPComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}