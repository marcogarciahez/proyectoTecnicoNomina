import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/Empleado';
import { Puesto } from '../models/Puesto';
import { CapturaMovimientoMensual } from '../models/CapturaMovimientoMensualModel';
import { Mov_NominaMensual } from '../models/Mov_NominaMensualModel';

@Injectable({
  providedIn: 'root',
})
export class MovNominaMensualService {

    constructor(){}

    public url = environment.url

    public obtenerNomina(id_empleado: number, fecha: string) {
        return new Promise((resolve, reject) => {
          fetch(this.url + `Mov_NominaMensual?id_empleado=${id_empleado}&fecha=${fecha}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(response => {
            if (response.status === 200) {
                console.log(response)
              response.json().then((data: Mov_NominaMensual) => {
    
                resolve(data);
              });
            } else {
              reject('No se pudo obtener la nomina');
            }
          }).catch(e => reject(e));;
        });
      }

      public capturarMovimiento(capturaMovimientoMensual: CapturaMovimientoMensual) {
        return new Promise((resolve, reject) => {
          fetch(this.url + `Mov_NominaMensual/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(capturaMovimientoMensual)
          }).then(response => {
            if (response.status === 200) {
              resolve(true);
            } else {
              reject('No se pudo cargar el movimiento');
            }
          }).catch(e => reject(e));;
        });
      }

}