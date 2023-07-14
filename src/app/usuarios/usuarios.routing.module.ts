import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';

const routes: Routes = [
  { path: '', component: ListadoUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
