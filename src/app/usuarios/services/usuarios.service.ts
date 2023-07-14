import { DTOUsuario } from './../models/DTOUsuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<DTOUsuario[]> {
    return this.http.get<DTOUsuario[]>(this.url);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  adicionarUsuario(usuario: DTOUsuario): Observable<void> {
    return this.http.post<void>(this.url, usuario );
  }
}
