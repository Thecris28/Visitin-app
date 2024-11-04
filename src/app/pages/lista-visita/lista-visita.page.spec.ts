import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaVisitaPage } from './lista-visita.page';

describe('ListaVisitaPage', () => {
  let component: ListaVisitaPage;
  let fixture: ComponentFixture<ListaVisitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
