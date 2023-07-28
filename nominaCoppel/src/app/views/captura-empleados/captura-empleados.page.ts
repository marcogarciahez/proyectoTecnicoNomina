import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/models/Puesto';
import { Empleado } from 'src/app/models/Empleado';
import { CatalogoEmpleadosService } from 'src/app/services/Catalogo-empleados.service';
import { CatalogoPuestosService } from 'src/app/services/Catalogo-puestos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagingService } from 'src/app/services/MessagingService';

@Component({
  selector: 'app-captura-empleados',
  templateUrl: './captura-empleados.page.html',
  styleUrls: ['./captura-empleados.page.scss'],
})
export class CapturaEmpleadosPage implements OnInit {

  public arrayPuestos: Puesto[] = [];
  public fechaNacimiento: string = ""
  public puestoSeleccionado: Puesto = new Puesto()
  //Formulario para validar que los campos esten completos y que cumplan los requisitos
  public formCaptura = new FormGroup({
    apellido_pat: new FormControl('', Validators.compose([Validators.required])),
    apellido_mat: new FormControl('', Validators.compose([Validators.required])),
    nombre: new FormControl('', Validators.compose([Validators.required])),
    telefono: new FormControl('',Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("[0-9]{10}") ])),
    domicilio: new FormControl('',Validators.compose([Validators.required])),
    puesto: new FormControl('', Validators.compose([Validators.required])),
  });
  //Mensajes por si no cumplen bien el formulario
  validationMessages = {
    apellido_pat: [
      { type: 'required', message: 'Ingrese el nombre' }
    ],
    apellido_mat: [
      { type: 'required', message: 'Ingrese el nombre' }
    ],
    nombre: [
      { type: 'required', message: 'Ingrese el nombre' }
    ],
    telefono: [
      { type: 'required', message: 'Ingrese el telefono' },
      { type: 'pattern', message: 'Caracteres no validos para este campo o excedio el limite de caracteres.' },
      { type: 'minlength', message: 'Numero de 10 caracteres.'}
    ],
    domicilio: [
      { type: 'required', message: 'Ingrese el domicilio' }
    ]
  };
  constructor(private catalogoEmpleadosService: CatalogoEmpleadosService,
    private catalogoPuestosService: CatalogoPuestosService,
    private messagingService: MessagingService) { }

  

  ngOnInit() {
    //Obtenemos los puestos para llenar el select
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
    //Comprobamos que la fecha no este vacia
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
      //Llamamos al servicio para hacer una peticion a la API para guardar el empleado, si devuelve true se guardo, de lo contrario no se completo el proceso
      this.catalogoEmpleadosService.capturarEmpleado(empleado).then((resp: any) =>{
        if(resp == true){
          this.messagingService.success("El empleado se ha capturado correctamente")
        }else{
          this.messagingService.error("Error al capturar al empleado")
        }
      }).catch(e =>{
        console.log(e)
        this.messagingService.error("Error al capturar al empleado")
      })
      
    }else{
      this.messagingService.success("No se ha seleccionado una fecha de nacimiento valida")
    }

  }

}
