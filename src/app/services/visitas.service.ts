import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  constructor() { }

  obtenerPacientes(): Observable<any[]> {
    const pacientes = [
      { nombre: 'María Fernanda López', direccion: 'Avda. Las Torres 2975, Recoleta', rut: '19.473.174-0', estado: 'Completado' },
      { nombre: 'Javier González Ruiz', direccion: 'Avda. Las Torres 2975, Recoleta', rut: '19.783.3773-0', estado: 'Completado' },
      { nombre: 'Laura Martínez Silva', direccion: 'Calle Los Olmos 123, Providencia', rut: '18.234.567-9', estado: 'En proceso' },
      { nombre: 'Carlos Pérez Muñoz', direccion: 'Calle San Diego 456, Santiago Centro', rut: '16.987.654-3', estado: 'Pendiente' },
      { nombre: 'Fernanda Sánchez Rojas', direccion: 'Av. Vitacura 789, Las Condes', rut: '20.234.123-1', estado: 'Completado' },
      { nombre: 'Miguel Angel Martínez', direccion: 'Calle Las Margaritas 321, Las Condes', rut: '20.234.123-1', estado: 'Completado' },
      { nombre: 'Cristian Camacho Vega', direccion: 'Calle Las Margaritas 321, Las Condes', rut: '20.234.123-1', estado: 'Completado' },
      { nombre: 'Carlos Alberto Vega', direccion: 'Calle Las Margaritas 321, Las Condes', rut: '20.234.123-1', estado: 'Completado' },
      { nombre: 'Miguel Angel Camacho', direccion: 'Calle Las Margaritas 321, Las Condes', rut: '20.234.123-1', estado: 'Completado' },
      { nombre: 'Cristian Camacho Vega', direccion: 'Calle Las Margaritas 321, Las Condes', rut: '20.234.123-1', estado: 'Completado' },
    ];

    return of(pacientes);
  }

  obtenerDetalles(): Observable<any[]> {

    const visitas = [
      { nombre: 'María Fernanda López',edad: 30, fecha_nac: '1990-01-01', rut: '19.473.174-0', direccion: 'Avda. Las Torres 2975, Recoleta', ciudad: 'Recoleta', educacion: 'cuarto medio', datosisita:{
        fecha: '2022-01-01',
        hora: '10:00',
        lugar: 'Recoleta'
      }
      },
      { nombre: 'Javier González',edad: 30, fecha_nac: '1990-01-01', rut: '19.783.3773-0', direccion: 'Avda. Las Torres 2975, Recoleta', ciudad: 'Recoleta', educacion: 'cuarto medio', datosisita:{
        fecha: '2022-01-01',
        hora: '10:00',
        lugar: 'Recoleta'
      }
      },
      { nombre: 'Laura Martínez',edad: 30, fecha_nac: '1990-01-04', rut: '18.234.567-9', direccion: 'Calle Los Olmos 123, Providencia', ciudad: 'Providencia', educacion: 'cuarto medio', datosisita:{
        fecha: '2022-01-01',
        hora: '10:00',
        lugar: 'Providencia'
      }
      },
      { nombre: 'Carlos Pérez',edad: 30, fecha_nac: '1990-01-05', rut: '16.987.654-3', direccion: 'Calle San Diego 456, Santiago Centers', ciudad: 'Santiago', educacion: 'cuarto medio', datosisita:{
        fecha: '2022-01-01',
        hora: '10:00',
        lugar: 'Santiago'
      }
      }
    ];

    return of(visitas);
  }
}
