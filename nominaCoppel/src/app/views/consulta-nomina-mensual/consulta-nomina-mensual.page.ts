import { Component, OnInit } from '@angular/core';
import { Mov_NominaMensual } from 'src/app/models/Mov_NominaMensualModel';
import { Empleado } from 'src/app/models/Empleado';
import { CatalogoEmpleadosService } from 'src/app/services/Catalogo-empleados.service';
import { MovNominaMensualService } from 'src/app/services/Mov_nominaMensual.service';
import { formatDate } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FechacomponentComponent } from '../fechacomponent/fechacomponent.component';
import {OverlayEventDetail} from '@ionic/core'; 
import { MessagingService } from 'src/app/services/MessagingService';

@Component({
  selector: 'app-consulta-nomina-mensual',
  templateUrl: './consulta-nomina-mensual.page.html',
  styleUrls: ['./consulta-nomina-mensual.page.scss'],
})
export class ConsultaNominaMensualPage implements OnInit {

  public nomina: Mov_NominaMensual = new Mov_NominaMensual();
  public arrayEmpleados: Empleado[] = []
  public empleadoSeleccionado: Empleado = new Empleado();
  public fechaSelec: string = ""
  public formCaptura = new FormGroup({
    empleado: new FormControl('', Validators.compose([Validators.required])),
  });
  constructor(private catalogoEmpleadosService: CatalogoEmpleadosService,
    private mov_NominaMensualService: MovNominaMensualService, 
    private modalController: ModalController, private messagingService: MessagingService) { }

  ngOnInit() {
    this.fechaSelec = formatDate(new Date(), 'yyyy-MM', 'en-US')
    console.log(this.fechaSelec)
    //Obtenemos los empleados para llenar el select
    this.catalogoEmpleadosService.obtenerEmpleados().then((resp: any) =>{
      console.log(resp)
      this.arrayEmpleados = resp
    }).catch(e=>{
      console.log(e)
    })
  }

  selectEmpleado($event: any){
    //Empleado a sido seleccionado
    this.empleadoSeleccionado = $event.target.value
  }

  nuevaFecha($event: any){
    //Fecha a sido modificada
    this.fechaSelec = $event.target.value
    
  }

  consultarNomina(){
    //Utilizamos el servicio para llamar a obtener la nomina con los parametros de fecha y empleado para filtrar
    this.mov_NominaMensualService.obtenerNomina(this.empleadoSeleccionado.id!, this.fechaSelec).then((resp: any) =>{
      console.log(resp)
      this.nomina = resp
      this.messagingService.success("Nomina consultada")
    }).catch(e =>{
      console.log(e)
      this.messagingService.error("Error al consultar nomina")
    });
  }

  async abrirModal() {
    //Componente que abre un calendario para seleccionar una fecha con formato de Mes y año.
    const modal = await this.modalController.create({
      component: FechacomponentComponent,
      cssClass: 'modal-fecha'
    });
    modal.onDidDismiss().then((dataReturned: OverlayEventDetail) => {
      if(dataReturned['data']!= undefined){
        this.fechaSelec = formatDate(dataReturned['data'], 'yyyy-MM', 'en-US')
      }
    });
    return await modal.present();
  }

}
