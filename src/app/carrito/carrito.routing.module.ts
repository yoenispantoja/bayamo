import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito.component';
import { DetallesCarritoComponent } from './detalles-carrito/detalles-carrito.component';

const routes: Routes = [
  { path: '', redirectTo: 'carrito', pathMatch: 'full' },
  {
    path: 'carrito',
    component: CarritoComponent,
  },
  { path: 'detalles-carrito', component: DetallesCarritoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritoRoutingModule {}
