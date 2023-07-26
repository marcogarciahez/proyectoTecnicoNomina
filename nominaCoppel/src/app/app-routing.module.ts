import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'captura-empleados',
    loadChildren: () => import('./views/captura-empleados/captura-empleados.module').then(m => m.CapturaEmpleadosPageModule)
  },
  {
    path: 'captura-movimientos',
    loadChildren: () => import('./views/captura-movimientos/captura-movimientos.module').then(m => m.CapturaMovimientosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
