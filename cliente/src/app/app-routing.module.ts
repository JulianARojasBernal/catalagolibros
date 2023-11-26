import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';


const routes: Routes = [
  { path: '', component: ListaLibrosComponent },
  { path: 'detalle/:id', component: DetalleLibroComponent },
  { path: 'agregar', component: AgregarLibroComponent },
  { path: 'editar/:id', component: EditarLibroComponent },
  { path: 'libros/detalle/:id', component: DetalleLibroComponent },
  { path: 'libros/editar/:id', component: EditarLibroComponent },
  { path: 'libros', component: ListaLibrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
