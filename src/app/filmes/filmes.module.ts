import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesComponent } from './filmes.component';
import { FilmesRoutingModule } from './filmes.routing.module';

@NgModule({
  imports: [CommonModule, FilmesRoutingModule],
  declarations: [FilmesComponent],
})
export class FilmesModule {}
