export class Puesto {
  id?: number;
  nombre?: string;
  salario_hora?: number;
  bono_hora?: number;

  constructor(id:number,nombre:string, salario_hora:number, bono_hora: number) {
      this.id = id;
      this.nombre = nombre;
      this.salario_hora = salario_hora;
      this.bono_hora = bono_hora
  }
}