import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CapturaMovimientosPageRoutingModule } from './captura-movimientos-routing.module';

import { CapturaMovimientosPage } from './captura-movimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CapturaMovimientosPageRoutingModule
  ],
  declarations: [CapturaMovimientosPage]
})
export class CapturaMovimientosPageModule {}
