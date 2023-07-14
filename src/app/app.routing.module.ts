import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'carrito',
    loadChildren: () =>
      import('./carrito/carrito.module').then((m) => m.CarritoModule),
  },
  {
    path: 'avioncito',
    loadChildren: () =>
      import('./avioncito/avioncito.module').then((m) => m.AvioncitoModule),
  },
  {
    path: 'trencito',
    loadChildren: () =>
      import('./trencito/trencito.module').then((m) => m.TrencitoModule),
  },
  {
    path: 'filmes',
    loadChildren: () =>
      import('./filmes/filmes.module').then((m) => m.FilmesModule),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
