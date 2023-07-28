import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaNominaMensualPage } from './consulta-nomina-mensual.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaNominaMensualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaNominaMensualPageRoutingModule {}
