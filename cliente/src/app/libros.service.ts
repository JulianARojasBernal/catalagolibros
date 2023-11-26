import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'http://127.0.0.1:8000/libros'; // Reemplaza con tu URL de backend

  constructor(private http: HttpClient) { }

  obtenerLibros(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerLibro(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  agregarLibro(libro: any): Observable<any> {
    return this.http.post(this.apiUrl, libro);
  }

  editarLibro(id: number, libro: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, libro);
  }

  eliminarLibro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
