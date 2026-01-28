import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  contactos: Contacto[] = [];
  contactoEditando: Contacto | null = null;
  mensaje: string = '';
  error: boolean = false;

  constructor(
    private contactoService: ContactoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cargarContactos();
  }

  cargarContactos() {
    this.contactoService.listarContactos().subscribe({
      next: (response) => {
        this.contactos = response;
      },
      error: (error) => {
        console.error('Error al cargar contactos:', error);
        this.mensaje = 'Error al cargar la lista de contactos';
        this.error = true;
      }
    });
  }

  editarContacto(contacto: Contacto) {
    this.contactoEditando = { ...contacto };
  }

  cancelarEdicion() {
    this.contactoEditando = null;
  }

  guardarEdicion() {
    if (this.contactoEditando) {
      const contactoParaActualizar = {
        id: this.contactoEditando.ID,
        nombre: this.contactoEditando.NOMBRE,
        telefono: this.contactoEditando.TELEFONO
      };
      this.contactoService.actualizarContacto(contactoParaActualizar as any).subscribe({
        next: (response) => {
          this.mensaje = 'Contacto actualizado exitosamente';
          this.error = false;
          this.contactoEditando = null;
          this.cargarContactos();
          setTimeout(() => this.mensaje = '', 3000);
        },
        error: (error) => {
          console.error('Error al actualizar:', error);
          this.mensaje = 'Error al actualizar el contacto';
          this.error = true;
        }
      });
    }
  }

  eliminarContacto(id: number | undefined) {
    if (!id) return;

    if (confirm('¿Estás seguro de eliminar este contacto?')) {
      this.contactoService.eliminarContacto(id).subscribe({
        next: (response) => {
          this.mensaje = 'Contacto eliminado exitosamente';
          this.error = false;
          this.cargarContactos();
          setTimeout(() => this.mensaje = '', 3000);
        },
        error: (error) => {
          console.error('Error al eliminar:', error);
          this.mensaje = 'Error al eliminar el contacto';
          this.error = true;
        }
      });
    }
  }

  volver() {
    this.router.navigate(['/']);
  }
}
