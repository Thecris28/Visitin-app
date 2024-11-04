import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VisitasService } from 'src/app/services/visitas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() rut = '';

  detalles: any[] = [];
  dato: any[]= [];

  constructor(
    private modalCtrl: ModalController,
    private visitasService: VisitasService
  ) { }

  ngOnInit() {
    this.visitasService.obtenerDetalles().subscribe(data => {
      this.detalles = data;

    })
    this.verVisitas(this.rut);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }

  verVisitas(rut: string) {
    let info = this.detalles.find(x => x.rut === this.rut);
    return this.dato.push(info)
  }
}
