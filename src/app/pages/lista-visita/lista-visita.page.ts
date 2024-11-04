import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';
import { VisitasService } from 'src/app/services/visitas.service';

@Component({
  selector: 'app-lista-visita',
  templateUrl: './lista-visita.page.html',
  styleUrls: ['./lista-visita.page.scss'],
})
export class ListaVisitaPage implements OnInit {

  visitas: any[] = [];

  constructor(
    private visitasService: VisitasService,
    private modalCtrl: ModalController) { }

  ngOnInit() {

    this.visitasService.obtenerPacientes().subscribe(data => {
      this.visitas = data;
    })

  }

  async verDetalles(rut:string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        rut: rut
      }
    })

    modal.present();
  }
}
