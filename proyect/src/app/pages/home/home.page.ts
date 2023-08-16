import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    const map = L.map('map').setView([-33.592459, -70.573856], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    L.marker([-33.592459, -70.573856])
      .addTo(map)
      .bindPopup('Sede Duoc UC Puente Alto, Chile')
      .openPopup();
  }
}

