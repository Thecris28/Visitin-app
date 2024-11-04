import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email: string = '';
  password: string = '';

  mostrar : boolean = true;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    
  }

  async login() {
    this.loginService.loginUser(this.email, this.password).subscribe(data => {
      let dato = JSON.stringify(data);
      let info = JSON.parse(dato);

      if (info.response === 'login ok') {
        console.log(info);
        this.loginService.alertaInfo(`Bienvenida ${info.user.name}`);
        this.router.navigate(['tabs'], { replaceUrl: true });
      }

    }, error => {
      if (error.status === 400) {
        this.loginService.alertaInfo('Credenciales incorrectas');
      } else {
        this.loginService.alertaInfo ('Ocurrió un error. Inténtalo nuevamente.');
      }
      console.error('Detalles del error:', error);

    })
  }

  onClick() {
    
      this.router.navigate(['tabs'], { replaceUrl: true });
  }

  mostrarContrasena() {
    this.mostrar = !this.mostrar;
  }
}
