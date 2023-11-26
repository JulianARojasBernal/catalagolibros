// editar-libro.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {
  libro: any;

  constructor(
    private route: ActivatedRoute,
    private librosService: LibrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerDetalleLibro();
  }

  obtenerDetalleLibro() {
    const libroIdParam = this.route.snapshot.paramMap.get('id');

    if (libroIdParam !== null && libroIdParam !== undefined) {
      const libroId = +libroIdParam;

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

  guardarCambios() {
    this.librosService.editarLibro(this.libro.id, this.libro).subscribe(
      (data) => {
        console.log('Libro editado exitosamente', data);
        this.router.navigate(['/libros/detalle', this.libro.id]);
      },
      (error) => {
        console.error('Error al editar libro', error);
      }
    );
  }
}

