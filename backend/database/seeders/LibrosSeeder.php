<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LibrosSeeder extends Seeder
{
    public function run()
    {
        // Elimina registros existentes antes de insertar nuevos datos
        DB::table('libros')->truncate();

        // Obtén el ID de una categoría de ejemplo (asegúrate de tener al menos una categoría creada)
        $categoriaId = DB::table('categorias')->where('nombre_categoria', 'Ficción')->value('id');

        // Inserta datos de ejemplo
        DB::table('libros')->insert([
            'titulo' => 'Libro de Ejemplo 1',
            'autor' => 'Autor Ejemplo 1',
            'ano_publicacion' => 2022,
            'sinopsis' => 'Sinopsis del libro de ejemplo 1.',
            'foto_portada' => 'ruta/a/la/foto1.jpg',
            'categoria_id' => $categoriaId,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('libros')->insert([
            'titulo' => 'Libro de Ejemplo 2',
            'autor' => 'Autor Ejemplo 2',
            'ano_publicacion' => 2023,
            'sinopsis' => 'Sinopsis del libro de ejemplo 2.',
            'foto_portada' => 'ruta/a/la/foto2.jpg',
            'categoria_id' => $categoriaId,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Puedes agregar más libros según sea necesario
    }
}
