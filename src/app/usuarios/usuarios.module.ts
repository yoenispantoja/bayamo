import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { UsuariosRoutingModule } from './usuarios.routing.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AdicionarUsuarioComponent } from './components/adicionar-usuario/adicionar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [ListadoUsuariosComponent, AdicionarUsuarioComponent, EditarUsuarioComponent]
})
export class UsuariosModule { }
