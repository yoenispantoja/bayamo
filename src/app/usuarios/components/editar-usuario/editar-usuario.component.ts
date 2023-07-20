import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DTOUsuario } from '../../models/DTOUsuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  @Input() usuario!: DTOUsuario;
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
      telefono: ''
    });

    this.userForm.patchValue({
      nombre: this.usuario.nombre,
      apellido: this.usuario.apellido,
      email: this.usuario.email,
      edad: this.usuario.edad,
      genero: this.usuario.genero,
      telefono: this.usuario.telefono
    });
  }

  actualizarUsuario() {
    const usuario = this.userForm.value;
    const usuarioActualizado: DTOUsuario = {
      id: this.usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      email: usuario.email,
      genero: usuario.genero,
      avatar: this.usuario.avatar,
      telefono: usuario.telefono,
    };
    this.usuariosService.actualizarUsuario(usuarioActualizado).subscribe(() => {
      this.modal.close(true);
    });
  }

}
