<?php

namespace App\Http\Controllers;

use App\models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    public function index()
    {
        return Usuario::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string',
            'correo' => 'required|email|unique:usuarios',
            'nombre_usuario' => 'required|string|unique:usuarios',
            'password' => 'required|string|min:6',
        ]);

        $usuario = Usuario::create([
            'nombre' => $request->nombre,
            'correo' => $request->correo,
            'nombre_usuario' => $request->nombre_usuario,
            'password' => Hash::make($request->password),
        ]);

        return response()->json($usuario, 201);
    }

    // Implementa las funciones para mostrar, actualizar y eliminar usuarios según sea necesario
}
