import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { Puesto } from 'src/app/models/Puesto';
import { CapturaMovimientoMensual } from 'src/app/models/CapturaMovimientoMensualModel';
import { CatalogoEmpleadosService } from 'src/app/services/Catalogo-empleados.service';
import { CatalogoPuestosService } from 'src/app/services/Catalogo-puestos.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MovNominaMensualService } from 'src/app/services/Mov_nominaMensual.service';
import { formatDate } from '@angular/common';
import { FechacomponentComponent } from '../fechacomponent/fechacomponent.component';
import {OverlayEventDetail} from '@ionic/core'; 
import { ModalController } from '@ionic/angular';
import { MessagingService } from 'src/app/services/MessagingService';
@Component({
  selector: 'app-captura-movimientos',
  templateUrl: './captura-movimientos.page.html',
  styleUrls: ['./captura-movimientos.page.scss'],
})
export class CapturaMovimientosPage implements OnInit {

  public arrayPuestos: Puesto[] = []
  public arrayEmpleados: Empleado[] = []
  public empleadoSeleccionado: Empleado = new Empleado();
  public fechaSelec: string = ""
  public faltas: number = 0
  public cant_entregas: number = 0
  public formCaptura = new FormGroup({
    empleado: new FormControl('', Validators.compose([Validators.required])),
    cant_entregas: new FormControl('',Validators.compose([Validators.required, Validators.pattern("^[0-9]+")])),
    faltas: new FormControl('',Validators.compose([Validators.required, Validators.pattern("^[0-9]+")]))
  });
  validationMessages = {
    empleado: [
      { type: 'required', message: 'Seleccione un empleado' }
    ],
    cant_entregas: [
      { type: 'required', message: 'Ingrese la cantidad de entregas' },
      { type: 'pattern', message: 'Caracteres no validos para este campo.' },
    ],
    faltas: [
      { type: 'required', message: 'Ingrese las faltas' },
      { type: 'pattern', message: 'Caracteres no validos para este campo.' },
    ]
  };
  constructor(private catalogoEmpleadosService: CatalogoEmpleadosService,
    private catalogoPuestosService: CatalogoPuestosService,
    private mov_NominaMensualService: MovNominaMensualService,
    private modalController: ModalController,
    private messagingService: MessagingService) {
    
   }

  ngOnInit() {
    //this.arrayPuestos = [new Puesto(1,"Chofer",30,10), new Puesto(2,"Cargador",30,5), new Puesto(3,"Auxiliar",30,0)]
    
    this.fechaSelec = formatDate(new Date(), 'yyyy-MM', 'en-US')
    console.log(this.fechaSelec)
    this.catalogoEmpleadosService.obtenerEmpleados().then((resp: any) =>{
      console.log(resp)
      this.arrayEmpleados = resp
    }).catch(e=>{
      console.log(e)
    })

    this.catalogoPuestosService.obtenerPuestos().then((resp: any) =>{
      console.log(resp)
      this.arrayPuestos = resp
      console.log(this.arrayPuestos)
    }).catch(e=>{
      console.log(e)
    })
  }

  fechaSeleccionada($event: any){
    this.fechaSelec = $event.target.value
    console.log(this.fechaSelec)
  }

  selectEmpleado($event: any){
    console.log($event)
    this.empleadoSeleccionado = $event.target.value
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: FechacomponentComponent,
      cssClass: 'modal-fecha'
    });
    modal.onDidDismiss().then((dataReturned: OverlayEventDetail) => {
      if(dataReturned['data']!= undefined){
        this.fechaSelec = formatDate(dataReturned['data'], 'yyyy-MM', 'en-US')
        console.log(this.fechaSelec + "AAAAAAAA")
      }
    });
    return await modal.present();
  }

  capturarMovimiento(){
    console.log(this.fechaSelec)
    let capturaMovimientoMensual = new CapturaMovimientoMensual()
    capturaMovimientoMensual.id_empleado = this.empleadoSeleccionado.id
    capturaMovimientoMensual.cant_entregas = this.cant_entregas
    capturaMovimientoMensual.faltas = this.faltas
    capturaMovimientoMensual.fecha = this.fechaSelec
    this.mov_NominaMensualService.capturarMovimiento(capturaMovimientoMensual).then((resp: any) =>{
      if(resp == true){
        this.messagingService.success("La información se ha capturado correctamente")
      }else{
        this.messagingService.error("Error al capturar la información")
      }
    }).catch(e=>{
      console.log(e)
      this.messagingService.error("Error al capturar la información")
    })
  }

}
