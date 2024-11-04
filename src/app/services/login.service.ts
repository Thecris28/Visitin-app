import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ruta: string = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient,
    private toastCtrl: ToastController
  ) { }

  async alertaInfo(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom',
    });

    await toast.present();
  }

  loginUser(email: string, password: string) {
    return this.http.post('http://localhost:3000/api/auth/login', { email, password });
}
}
