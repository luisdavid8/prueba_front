import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { AgregarContactoComponent } from './components/agregar-contacto/agregar-contacto.component';
import { BuscarContactoComponent } from './components/buscar-contacto/buscar-contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: ListaContactosComponent },
  { path: 'agregar', component: AgregarContactoComponent },
  { path: 'buscar', component: BuscarContactoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
