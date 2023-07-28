import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FechacomponentModule } from '../fechacomponent/fechacomponent.module';
import { ConsultaNominaMensualPageRoutingModule } from './consulta-nomina-mensual-routing.module';

import { ConsultaNominaMensualPage } from './consulta-nomina-mensual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FechacomponentModule,
    IonicModule,
    ConsultaNominaMensualPageRoutingModule
  ],
  declarations: [ConsultaNominaMensualPage]
})
export class ConsultaNominaMensualPageModule {}
