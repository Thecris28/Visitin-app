import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nombre: string = 'Constanza';
  apellido: string = 'Palacios';
  cargo: string = 'Asistente social';
  correo: string = '0e2Oq@example.com';

  constructor() {}

}
