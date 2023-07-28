import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-fechacomponent',
  templateUrl: './fechacomponent.component.html',
  styleUrls: ['./fechacomponent.component.scss'],
})
export class FechacomponentComponent  implements OnInit {
  public fecha: string = ""
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  nuevaFecha($event: any){
    this.fecha = $event.target.value
    console.log(this.fecha)
    //Cerramos el componente devolviendo la fecha seleccionada
    this.modalController.dismiss(this.fecha)
  }

}
