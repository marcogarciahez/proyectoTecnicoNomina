import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/models/Puesto';
@Component({
  selector: 'app-captura-empleados',
  templateUrl: './captura-empleados.page.html',
  styleUrls: ['./captura-empleados.page.scss'],
})
export class CapturaEmpleadosPage implements OnInit {

  public arrayPuestos: Puesto[] = [];

  constructor() { }

  

  ngOnInit() { 
    this.arrayPuestos = [new Puesto("Chofer",3), new Puesto("Cargador",3), new Puesto("Auxiliar",3)] 
  }



}
