import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarritoComponent } from './carrito/carrito.component';
import { RuedaComponent } from './rueda/rueda.component';


@NgModule({
  declarations: [AppComponent, CarritoComponent, RuedaComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
