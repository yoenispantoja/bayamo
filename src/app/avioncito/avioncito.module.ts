import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvioncitoComponent } from './avioncito.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvioncitoComponent],
  exports: [AvioncitoComponent]
})
export class AvioncitoModule { }
