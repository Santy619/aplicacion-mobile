import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  register(email: string, password: string): boolean {
    // Implementa el registro y guarda el estado de autenticación en LocalStorage
  }

  login(email: string, password: string): boolean {
    // Implementa el inicio de sesión y guarda el estado de autenticación en LocalStorage
  }

  logout(): void {
    // Implementa el cierre de sesión y elimina el estado de autenticación de LocalStorage
  }

  isAuthenticated(): boolean {
    // Verifica si el usuario está autenticado basado en la información almacenada en LocalStorage
  }
}