import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { UsuariosRoutingModule } from './usuarios.routing.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AdicionarUsuarioComponent } from './components/adicionar-usuario/adicionar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListadoUsuariosComponent, AdicionarUsuarioComponent]
})
export class UsuariosModule { }
