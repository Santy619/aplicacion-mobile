import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private authService: AuthService) {}

  login(email: string, password: string): void {
    if (this.authService.login(email, password)) {
      // Usuario se dirige a la a¿pagina correctamente , se auntentifica la sesion
    } else {
      // Mostrar mensaje de error de inicio de sesión
    }
  }
}