import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  irConductor() {
    this.router.navigate(['/conductor']); // Cambia 'conductor' por la ruta de la página de conductor
  }

  irPasajero() {
    this.router.navigate(['/pasajero']); // Cambia 'pasajero' por la ruta de la página de pasajero
  }

  navigateToFeature(feature: string) {
    // Agrega lógica para manejar la navegación a características adicionales
    if (feature === 'feature1') {
      // Navegar a la página de la característica 1
    } else if (feature === 'feature2') {
      // Navegar a la página de la característica 2
    }
    // Agrega más casos según sea necesario
  }

}

