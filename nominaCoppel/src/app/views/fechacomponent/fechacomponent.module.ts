import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FechacomponentComponent } from './fechacomponent.component';
@NgModule({
  declarations: [FechacomponentComponent],
  imports: [
    CommonModule, FormsModule, IonicModule,ReactiveFormsModule
  ],
  exports: [FechacomponentComponent]
})
export class FechacomponentModule { }
