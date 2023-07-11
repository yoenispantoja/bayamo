import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarritoModule } from './carrito/carrito.module';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeModule } from './welcome/welcome.module';
import { AvioncitoModule } from './avioncito/avioncito.module';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    NgbModule,
    CarritoModule,
    WelcomeModule,
    AvioncitoModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
