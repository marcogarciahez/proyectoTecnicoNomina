import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Capturar empleados', url: '/captura-empleados', icon: 'people' },
    { title: 'Captura de movimientos por mes', url: '/captura-movimientos', icon: 'clipboard' },
  ];
  constructor() {}
}
