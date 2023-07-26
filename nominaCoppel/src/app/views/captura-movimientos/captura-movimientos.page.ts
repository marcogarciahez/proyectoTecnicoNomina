import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/models/Puesto';

@Component({
  selector: 'app-captura-movimientos',
  templateUrl: './captura-movimientos.page.html',
  styleUrls: ['./captura-movimientos.page.scss'],
})
export class CapturaMovimientosPage implements OnInit {

  public arrayMeses: string[] = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  public arrayPuestos: Puesto[] = [];

  constructor() { }

  ngOnInit() {
    this.arrayPuestos = [new Puesto("Chofer",3), new Puesto("Cargador",3), new Puesto("Auxiliar",3)] 
  }

}
