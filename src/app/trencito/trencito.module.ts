import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrencitoRoutingModule } from './trencito.routing.module';

import { TrencitoComponent } from './trencito/trencito.component';

@NgModule({
  declarations: [
    TrencitoComponent
  ],
  imports: [
    CommonModule,
    TrencitoRoutingModule
  ]
})
export class TrencitoModule { }
