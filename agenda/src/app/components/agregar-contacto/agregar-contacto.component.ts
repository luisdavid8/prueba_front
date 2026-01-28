import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.scss']
})
export class AgregarContactoComponent {

  contacto: Contacto = {
    NOMBRE: '',
    TELEFONO: ''
  };

  mensaje: string = '';
  error: boolean = false;

  constructor(
    private contactoService: ContactoService,
    private router: Router
  ) { }

  agregarContacto() {
    if (!this.contacto.NOMBRE || !this.contacto.TELEFONO) {
      this.mensaje = 'Por favor completa todos los campos';
      this.error = true;
      return;
    }

    this.contactoService.agregarContacto(this.contacto).subscribe({
      next: (response) => {
        this.mensaje = 'Contacto agregado exitosamente';
        this.error = false;
        setTimeout(() => {
          this.router.navigate(['/lista']);
        }, 1500);
      },
      error: (error) => {
        this.mensaje = 'Error al agregar contacto';
        this.error = true;
        console.error('Error:', error);
      }
    });
  }

  volver() {
    this.router.navigate(['/']);
  }
}
