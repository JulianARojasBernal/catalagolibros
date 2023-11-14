<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriasSeeder extends Seeder
{
    public function run()
    {
        // Elimina registros existentes antes de insertar nuevos datos
        DB::table('categorias')->truncate();

        // Inserta datos de ejemplo
        DB::table('categorias')->insert([
            'nombre_categoria' => 'Ficción',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('categorias')->insert([
            'nombre_categoria' => 'Misterio',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Agrega más categorías según sea necesario
        DB::table('categorias')->insert([
            'nombre_categoria' => 'Aventura',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Puedes seguir agregando más categorías

    }
}
