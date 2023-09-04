import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Define la clase Mensaje
class Mensaje {
  constructor(public remitente: string, public mensaje: string) {}
}

// Define la clase Contacto
class Contacto {
  constructor(public nombre: string, public avatar: string) {}
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  mensajes: { [nombreContacto: string]: Mensaje[] } = {};
  contactoSeleccionado: Contacto | any;
  listaDeContactos: Contacto[] = [
    { nombre: 'Ricky', avatar: 'URL_DEL_AVATAR_1' },
    { nombre: 'Jarvis', avatar: 'URL_DEL_AVATAR_2' },
    { nombre: 'Diosito', avatar: 'URL_DEL_AVATAR_3' },
    { nombre: 'Messi', avatar: 'URL_DEL_AVATAR_3' },
    // Agrega más contactos según sea necesario
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Aquí puedes cargar la lista de contactos desde tu fuente de datos (por ejemplo, una API o un servicio)
    // Asegúrate de que `listaDeContactos` esté poblada con tus contactos
  }

  abrirChatIndividual(contacto: Contacto) {
    this.contactoSeleccionado = contacto;
    this.router.navigate(['/chat-individual', contacto.nombre]);
  }
}