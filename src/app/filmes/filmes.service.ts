import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../helpers/models/filme';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {

  url = "https://crudcrud.com/api/1e5ec595d5f64f6bbfdde6a8f0992c58/filmes";

  constructor(private http: HttpClient) {}

  getFilms(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  deleteFilm(id: string): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
