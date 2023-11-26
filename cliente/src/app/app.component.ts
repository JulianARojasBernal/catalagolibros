// app.component.ts
import { Component, OnInit } from '@angular/core';
import { LibrosService } from './libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  libros: any[] = [];

  constructor(private librosService: LibrosService, private router: Router) {}

  ngOnInit() {
    this.obtenerLibros();
  }

  obtenerLibros() {
    this.librosService.obtenerLibros().subscribe(
      (data) => {
        this.libros = data;
      },
      (error) => {
        console.error('Error al obtener la lista de libros', error);
      }
    );
  }

  verLibro(id: number) {
    this.router.navigate(['/libros/detalle', id]);
  }

  editarLibro(id: number) {
    this.router.navigate(['/libros/editar', id]);
  }

  eliminarLibro(id: number) {
    // Lógica para eliminar el libro (puedes implementar esto según tus necesidades)
  }

  agregarLibro() {
    this.router.navigate(['/libros/agregar']);
  }
}
