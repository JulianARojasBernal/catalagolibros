<?php

namespace App\Http\Controllers;

use App\models\Libro;
use Illuminate\Http\Request;

class LibroController extends Controller
{
    public function index()
    {
        return Libro::with('categoria')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string',
            'autor' => 'required|string',
            'ano_publicacion' => 'required|integer',
            'sinopsis' => 'required|string',
            'foto_portada' => 'required|string',
            'categoria_id' => 'required|exists:categorias,id',
        ]);

        $libro = Libro::create($request->all());

        return response()->json($libro, 201);
    }

    // Implementa las funciones para mostrar, actualizar y eliminar libros según sea necesario
}
