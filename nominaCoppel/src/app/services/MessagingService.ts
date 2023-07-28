import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class MessagingService {

  constructor(
    private toastController: ToastController
  ) { }

  async warning(message: string) {
    return this.show(message, 'warning');
  }

  async error(message: string) {
    return this.show(message, 'danger');
  }

  async success(message: string) {
    return this.show(message, 'success');
  }

  async info(message: string) {
    return this.show(message, 'medium');
  }
  //Crea mensajes informativos en pantalla, un parametro es el mensaje y el otro se usa para indicar que tipo de mensaje es, si error o exito.
  private async show(message: string, type: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: type,
      position : 'bottom'
    });
    toast.present();
  }
}