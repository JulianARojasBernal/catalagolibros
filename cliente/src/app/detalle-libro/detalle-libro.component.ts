import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {
  libro: any;

  constructor(
    private route: ActivatedRoute,
    private librosService: LibrosService
  ) { }

  ngOnInit(): void {
    this.obtenerDetalleLibro();
  }

  obtenerDetalleLibro() {
    const libroIdParam = this.route.snapshot.paramMap.get('id');

    // Verificar si libroIdParam es null o undefined
    if (libroIdParam !== null && libroIdParam !== undefined) {
      const libroId = +libroIdParam; // Convierte a número

      // Verificar si libroId es un número válido
      if (!isNaN(libroId)) {
        this.librosService.obtenerLibro(libroId).subscribe(
          (data) => {
            this.libro = data;
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error('libroId no es un número válido');
      }
    } else {
      console.error('libroIdParam es null o undefined');
    }
  }
}
