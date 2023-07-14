import { Filme } from './../helpers/models/filme';
import { Component, OnInit } from '@angular/core';
import { FilmesService } from './filmes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  filmes: Filme[] = [];
  contador?: number = 0;

  constructor(private filmesService: FilmesService) {}

  ngOnInit() {
    this.cargarDatos();
  }

  // se conecta al servicio para obtener los datos
  cargarDatos() {
    this.filmesService.getFilms().subscribe((result) => {
      this.filmes = result;
      this.contador = this.filmes.length;
    });
  }

  // elimina un registro
  deleteFilm(id: string) {
    this.filmesService.deleteFilm(id).subscribe(() => {
      this.cargarDatos();
    });
  }

}
