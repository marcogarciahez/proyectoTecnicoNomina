import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapturaEmpleadosPageRoutingModule } from './captura-empleados-routing.module';

import { CapturaEmpleadosPage } from './captura-empleados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapturaEmpleadosPageRoutingModule
  ],
  declarations: [CapturaEmpleadosPage]
})
export class CapturaEmpleadosPageModule {}
