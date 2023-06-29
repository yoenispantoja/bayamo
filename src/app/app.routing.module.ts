import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvioncitoComponent } from './avioncito/avioncito.component';
import { CarritoComponent } from './carrito/carrito.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'avioncito', component: AvioncitoComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
