<?php

namespace App\Http\Controllers;

use App\models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index()
    {
        return Categoria::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre_categoria' => 'required|string|unique:categorias',
        ]);

        $categoria = Categoria::create([
            'nombre_categoria' => $request->nombre_categoria,
        ]);

        return response()->json($categoria, 201);
    }

    // Implementa las funciones para mostrar, actualizar y eliminar categorías según sea necesario
}
