import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) { }

  agregarContacto(contacto: Contacto): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregarContacto`, contacto);
  }

  listarContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${this.apiUrl}/listarContactos`);
  }

  buscarPorNombre(nombre: string): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${this.apiUrl}/buscarPorNombre/${nombre}`);
  }

  actualizarContacto(contacto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/actualizarContacto`, contacto);
  }

  eliminarContacto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminarContacto/${id}`);
  }
}
