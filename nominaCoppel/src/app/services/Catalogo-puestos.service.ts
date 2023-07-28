import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/Empleado';
import { Puesto } from '../models/Puesto';

@Injectable({
  providedIn: 'root',
})
export class CatalogoPuestosService {

    constructor(){}

    public url = environment.url

    //Se utiliza para obtener los puestos disponibles
    public obtenerPuestos() {
        return new Promise((resolve, reject) => {
          fetch(this.url + `Puesto/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(response => {
            if (response.status === 200) {
              response.json().then((data: Puesto[]) => {
    
                resolve(data);
              });
            } else {
              reject('No se pudieron obtener los puestos');
            }
          }).catch(e => reject(e));;
        });
      }

}