import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FechacomponentModule } from '../fechacomponent/fechacomponent.module';
import { CapturaEmpleadosPageRoutingModule } from './captura-empleados-routing.module';

import { CapturaEmpleadosPage } from './captura-empleados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FechacomponentModule,
    ReactiveFormsModule,
    IonicModule,
    CapturaEmpleadosPageRoutingModule
  ],
  declarations: [CapturaEmpleadosPage]
})
export class CapturaEmpleadosPageModule {}
