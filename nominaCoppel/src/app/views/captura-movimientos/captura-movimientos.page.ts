import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { Puesto } from 'src/app/models/Puesto';
import { CapturaMovimientoMensual } from 'src/app/models/CapturaMovimientoMensualModel';
import { CatalogoEmpleadosService } from 'src/app/services/Catalogo-empleados.service';
import { CatalogoPuestosService } from 'src/app/services/Catalogo-puestos.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MovNominaMensualService } from 'src/app/services/Mov_nominaMensual.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-captura-movimientos',
  templateUrl: './captura-movimientos.page.html',
  styleUrls: ['./captura-movimientos.page.scss'],
})
export class CapturaMovimientosPage implements OnInit {

  public arrayMeses: string[] = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
  public arrayPuestos: Puesto[] = []
  public arrayEmpleados: Empleado[] = []
  public empleadoSeleccionado: Empleado = new Empleado();
  public fechaSelec: string = ""
  public faltas: number = 0
  public cant_movimientos: number = 0
  public formCaptura = new FormGroup({
    empleado: new FormControl('', Validators.compose([Validators.required])),
    cant_movimientos: new FormControl('',Validators.compose([Validators.required])),
    faltas: new FormControl('',Validators.compose([Validators.required]))
  });
  
  constructor(private catalogoEmpleadosService: CatalogoEmpleadosService,
    private catalogoPuestosService: CatalogoPuestosService,
    private mov_NominaMensualService: MovNominaMensualService) {
    
   }

  ngOnInit() {
    //this.arrayPuestos = [new Puesto(1,"Chofer",30,10), new Puesto(2,"Cargador",30,5), new Puesto(3,"Auxiliar",30,0)]
    this.fechaSelec = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
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

  capturarMovimiento(){
    let capturaMovimientoMensual = new CapturaMovimientoMensual()
    capturaMovimientoMensual.id_empleado = this.empleadoSeleccionado.id
    capturaMovimientoMensual.cant_movimientos = this.cant_movimientos
    capturaMovimientoMensual.faltas = this.faltas
    capturaMovimientoMensual.fecha = this.fechaSelec
    this.mov_NominaMensualService.capturarMovimiento(capturaMovimientoMensual).then((resp: any) =>{
      console.log("Triunfamos")
    }).catch(e=>{
      console.log(e)
    })
  }

}
