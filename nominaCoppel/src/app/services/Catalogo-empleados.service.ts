import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root',
})
export class CatalogoEmpleadosService {

    constructor(){}

    public url = environment.url

    public obtenerEmpleadoId(id: number) {
        return new Promise((resolve, reject) => {
          fetch(this.url + `Empleado?id=${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(response => {
            if (response.status === 200) {
              response.json().then((data: any) => {
    
                resolve(data);
              });
            } else {
              reject('No se pudo obtener el empleado');
            }
          }).catch(e => reject(e));;
        });
      }

      public obtenerEmpleados() {
        return new Promise((resolve, reject) => {
          fetch(this.url + `Empleado/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(response => {
            if (response.status === 200) {
              response.json().then((data: Empleado[]) => {
    
                resolve(data);
              });
            } else {
              reject('No se pudieron obtener los empleados');
            }
          }).catch(e => reject(e));;
        });
      }

      public capturarEmpleado(empleado: Empleado) {
        return new Promise((resolve, reject) => {
          fetch(this.url + `Empleado/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(empleado)
          }).then(response => {
            if (response.status === 200) {
              resolve(true);
            } else {
              reject('No se pudo guardar el empleado');
            }
          }).catch(e => reject(e));;
        });
      }

      /*public obtenerEmpleadosFiltro(nombre: string) {
        return new Promise((resolve, reject) => {
          fetch(this.url + `Empleado?nombre=${nombre}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(response => {
            if (response.status === 200) {
              response.json().then((data: Empleado[]) => {
    
                resolve(data);
              });
            } else {
              reject('No se pudo obtener el empleado');
            }
          }).catch(e => reject(e));;
        });
      }*/

}