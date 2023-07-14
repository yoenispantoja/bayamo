import { DTOUsuario } from './../../models/DTOUsuario';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.scss'],
})
export class AdicionarUsuarioComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  edad: number = 0;
  genero: string = '';
  telefono: string = '';

  constructor(
    public modal: NgbActiveModal,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit() {}

  adicionarUsuario() {
    const nuevoUsuario: DTOUsuario = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      email: this.email,
      genero: this.genero,
      avatar:
        this.genero === 'Masculino'
          ? 'https://xsgames.co/randomusers/avatar.php?g=male'
          : 'https://xsgames.co/randomusers/avatar.php?g=female',
      telefono: this.telefono,
    };
    this.usuariosService.adicionarUsuario(nuevoUsuario).subscribe(() => {
      this.modal.close(true);
    });
  }
}
