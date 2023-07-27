import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/models/Puesto';
import { Empleado } from 'src/app/models/Empleado';
import { CatalogoEmpleadosService } from 'src/app/services/Catalogo-empleados.service';
import { CatalogoPuestosService } from 'src/app/services/Catalogo-puestos.service';
@Component({
  selector: 'app-captura-empleados',
  templateUrl: './captura-empleados.page.html',
  styleUrls: ['./captura-empleados.page.scss'],
})
export class CapturaEmpleadosPage implements OnInit {

  public arrayPuestos: Puesto[] = [];

  constructor(private catalogoEmpleadosService: CatalogoEmpleadosService,
    private catalogoPuestosService: CatalogoPuestosService) { }

  

  ngOnInit() { 
    this.arrayPuestos = [new Puesto(1,"Chofer",30,10), new Puesto(2,"Cargador",30,5), new Puesto(3,"Auxiliar",30,0)] 
  }



}
