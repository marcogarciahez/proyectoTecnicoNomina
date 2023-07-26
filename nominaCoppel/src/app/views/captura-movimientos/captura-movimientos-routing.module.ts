import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturaMovimientosPage } from './captura-movimientos.page';

const routes: Routes = [
  {
    path: '',
    component: CapturaMovimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturaMovimientosPageRoutingModule {}
