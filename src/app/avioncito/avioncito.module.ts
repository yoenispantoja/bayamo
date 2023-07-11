import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvioncitoComponent } from './avioncito.component';
import { AvioncitoRoutingModule } from './avioncito.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AvioncitoRoutingModule
  ],
  declarations: [AvioncitoComponent],
  exports: [AvioncitoComponent]
})
export class AvioncitoModule { }
