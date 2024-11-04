import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaVisitaPage } from './lista-visita.page';

const routes: Routes = [
  {
    path: '',
    component: ListaVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaVisitaPageRoutingModule {}
