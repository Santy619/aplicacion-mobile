import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  constructor(private authService: AuthService) {}

  register(email: string, password: string): void {
    if (this.authService.register(email, password)) {
      // Usuario registrado exitosamente, redirige a la página de inicio o realiza otra acción
    } else {
      // Mostrar mensaje de error de registro
    }
  }
}