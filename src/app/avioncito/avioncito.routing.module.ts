import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvioncitoComponent } from './avioncito.component';


const routes: Routes = [
  { path: '', component: AvioncitoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvioncitoRoutingModule {}
