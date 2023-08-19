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

}

