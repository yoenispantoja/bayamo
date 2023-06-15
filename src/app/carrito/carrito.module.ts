import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarritoComponent } from './carrito.component';
import { PuertaComponent } from './puerta/puerta.component';
import { RuedaComponent } from './rueda/rueda.component';
import { LetrasPipe } from './letras.pipe';
import { NumerosPipe } from './numeros.pipe';



@NgModule({
  imports: [CommonModule],
  declarations: [CarritoComponent, RuedaComponent, PuertaComponent, LetrasPipe, NumerosPipe],
  exports: [CarritoComponent, RuedaComponent, PuertaComponent],
  providers: [],
})
export class CarritoModule { }
