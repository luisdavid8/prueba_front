import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { AgregarContactoComponent } from './components/agregar-contacto/agregar-contacto.component';
import { BuscarContactoComponent } from './components/buscar-contacto/buscar-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaContactosComponent,
    AgregarContactoComponent,
    BuscarContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
