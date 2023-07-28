import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/models/Puesto';
import { Empleado } from 'src/app/models/Empleado';
import { CatalogoEmpleadosService } from 'src/app/services/Catalogo-empleados.service';
import { CatalogoPuestosService } from 'src/app/services/Catalogo-puestos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-captura-empleados',
  templateUrl: './captura-empleados.page.html',
  styleUrls: ['./captura-empleados.page.scss'],
})
export class CapturaEmpleadosPage implements OnInit {

  public arrayPuestos: Puesto[] = [];
  public fechaNacimiento: string = ""
  public puestoSeleccionado: Puesto = new Puesto()
  public formCaptura = new FormGroup({
    apellido_pat: new FormControl('', Validators.compose([Validators.required])),
    apellido_mat: new FormControl('', Validators.compose([Validators.required])),
    nombre: new FormControl('', Validators.compose([Validators.required])),
    telefono: new FormControl('',Validators.compose([Validators.required])),
    domicilio: new FormControl('',Validators.compose([Validators.required])),
    puesto: new FormControl('', Validators.compose([Validators.required])),
  });
  constructor(private catalogoEmpleadosService: CatalogoEmpleadosService,
    private catalogoPuestosService: CatalogoPuestosService) { }

  

  ngOnInit() {
    console.log(this.fechaNacimiento)
    this.catalogoPuestosService.obtenerPuestos().then((resp: any) =>{
      console.log(resp)
      this.arrayPuestos = resp
    }).catch(e =>{
      console.log(e)
    })
    
  }

  fechaSeleccionada($event: any){
    console.log($event.target.value)
    this.fechaNacimiento = $event.target.value
  }

  selectPuesto($event: any){
    console.log($event.target.value)
    this.puestoSeleccionado = $event.target.value
  }

  capturarEmpleado(){
    if (this.fechaNacimiento != ""){
      let empleado = new Empleado()
      empleado.apellido_pat = this.formCaptura.value.apellido_pat!
      empleado.apellido_mat = this.formCaptura.value.apellido_mat!
      empleado.nombre = this.formCaptura.value.nombre!
      empleado.telefono = this.formCaptura.value.telefono!
      empleado.domicilio = this.formCaptura.value.domicilio!
      empleado.id_puesto = this.puestoSeleccionado.id
      empleado.fecha_nac = this.fechaNacimiento
      console.log(empleado)
      this.catalogoEmpleadosService.capturarEmpleado(empleado).then((resp: any) =>{
        console.log("Empleado capturado correctamente")
      }).catch(e =>{
        console.log(e)
      })
      
    }

  }

}
