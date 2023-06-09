import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarritoComponent } from './carrito.component';
import { PuertaComponent } from './puerta/puerta.component';
import { RuedaComponent } from './rueda/rueda.component';
import { LetrasPipe } from '../helpers/pipes/letras.pipe';
import { NumerosPipe } from '../helpers/pipes/numeros.pipe';
import { ResaltadoDirective } from '../helpers/directives/resaltado.directive';
import { DefaultImageDirective } from '../helpers/directives/notFoundImage.directive';
import { CarritoRoutingModule } from './carrito.routing.module';
import { DetallesCarritoComponent } from './detalles-carrito/detalles-carrito.component';

@NgModule({
  imports: [CommonModule, CarritoRoutingModule],
  declarations: [
    CarritoComponent,
    RuedaComponent,
    PuertaComponent,
    LetrasPipe,
    NumerosPipe,
    ResaltadoDirective,
    DefaultImageDirective,
    DetallesCarritoComponent
  ],
  exports: [CarritoComponent, RuedaComponent, PuertaComponent],
  providers: [],
})
export class CarritoModule {}
