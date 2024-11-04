import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaVisitaPageRoutingModule } from './lista-visita-routing.module';

import { ListaVisitaPage } from './lista-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaVisitaPageRoutingModule
  ],
  declarations: [ListaVisitaPage]
})
export class ListaVisitaPageModule {}
