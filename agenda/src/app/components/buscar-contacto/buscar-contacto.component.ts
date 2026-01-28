import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-buscar-contacto',
  templateUrl: './buscar-contacto.component.html',
  styleUrls: ['./buscar-contacto.component.scss']
})
export class BuscarContactoComponent {

  nombreBusqueda: string = '';
  contactosEncontrados: Contacto[] = [];
  buscado: boolean = false;
  mensaje: string = '';

  constructor(
    private contactoService: ContactoService,
    private router: Router
  ) { }

  buscar() {
    if (!this.nombreBusqueda.trim()) {
      this.mensaje = 'Por favor ingresa un nombre para buscar';
      return;
    }

    this.contactoService.buscarPorNombre(this.nombreBusqueda).subscribe({
      next: (response) => {
        this.contactosEncontrados = response;
        this.buscado = true;
        this.mensaje = '';
        if (this.contactosEncontrados.length === 0) {
          this.mensaje = 'No se encontraron contactos con ese nombre';
        }
      },
      error: (error) => {
        console.error('Error al buscar:', error);
        this.mensaje = 'Error al realizar la búsqueda';
        this.buscado = true;
        this.contactosEncontrados = [];
      }
    });
  }

  limpiar() {
    this.nombreBusqueda = '';
    this.contactosEncontrados = [];
    this.buscado = false;
    this.mensaje = '';
  }

  volver() {
    this.router.navigate(['/']);
  }
}
