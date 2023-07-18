import { DTOUsuario } from './../../models/DTOUsuario';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../../services/usuarios.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.scss'],
})
export class AdicionarUsuarioComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private usuariosService: UsuariosService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.minLength(3), Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      genero: '',
      telefono: '',
      direccion: this.fb.group({
        calle: '',
        numero: '',
      }),
    });
  }

  adicionarUsuario() {
    const usuario = this.userForm.value;
    const nuevoUsuario: DTOUsuario = {
      id: Math.floor(Math.random() * 1000),
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      email: usuario.email,
      genero: usuario.genero,
      avatar:
        usuario.genero === 'Masculino'
          ? 'https://xsgames.co/randomusers/avatar.php?g=male'
          : 'https://xsgames.co/randomusers/avatar.php?g=female',
      telefono: usuario.telefono,
    };
    this.usuariosService.adicionarUsuario(nuevoUsuario).subscribe(() => {
      this.modal.close(true);
    });
  }
}
