import { DTOUsuario } from './../../models/DTOUsuario';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdicionarUsuarioComponent } from '../../components/adicionar-usuario/adicionar-usuario.component';

@Component({
  selector: 'listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss'],
})
export class ListadoUsuariosComponent implements OnInit {
  usuarios: DTOUsuario[] = [];
  gente: any[] = [];

  constructor(
    private usuariosService: UsuariosService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.usuariosService.getUsuarios().subscribe((resultado) => {
      this.usuarios = resultado;
    });
  }

  deleteUsuario(usuario: DTOUsuario) {
    const nombreUsuaio = `${usuario.nombre} ${usuario.apellido}`;
    Swal.fire({
      title: `¿Está seguro de que quiere eliminar al usuario ${nombreUsuaio}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sí',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.deleteUsuario(usuario.id).subscribe(() => {
          Swal.fire(
            `El usuario ${nombreUsuaio} ha sido eliminado!`,
            '',
            'success'
          );
          this.cargarDatos();
        });
      }
    });
  }

  adicionarUsuario() {
    this.modalService.open(AdicionarUsuarioComponent).result.then((res) => {
      if (res) {
        Swal.fire(`El usuario ha sido creado!`, '', 'success');
        this.cargarDatos();
      }
    });
  }
}
