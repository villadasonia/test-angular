import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleDetenidosComponent } from './detalle-detenidos/detalle-detenidos.component';
import { DetenidosComponent } from './detenidos/detenidos.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:'detenidos', pathMatch:'full'

},

{
  path: "dashboard",
  component: DashboardComponent
},

{
  path: "detenidos",
  component: DetenidosComponent
},
{
  path:"detalle-detenido/:id",
  component:DetalleDetenidosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
