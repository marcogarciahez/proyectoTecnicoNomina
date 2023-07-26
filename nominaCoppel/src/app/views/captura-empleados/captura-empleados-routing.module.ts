import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturaEmpleadosPage } from './captura-empleados.page';

const routes: Routes = [
  {
    path: '',
    component: CapturaEmpleadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturaEmpleadosPageRoutingModule {}
