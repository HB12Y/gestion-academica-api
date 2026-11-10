import { Injectable } from '@nestjs/common';
import { pool } from '../database';

@Injectable()
export class DocentesService {

  // Obtener todos los docentes
  async obtenerTodos() {
    const [docentes] = await pool.query(
      'SELECT * FROM docentes'
    );

    return docentes;
  }

  // Crear un docente
  async crear(docente: {
    nombre: string;
    correo: string;
    especialidad: string;
  }) {
    const { nombre, correo, especialidad } = docente;

    const [resultado] = await pool.query(
      'INSERT INTO docentes (nombre, correo, especialidad) VALUES (?, ?, ?)',
      [nombre, correo, especialidad],
    );

    return {
      mensaje: 'Docente registrado correctamente',
      resultado,
    };
  }

  // Actualizar un docente
  async actualizar(
    id: number,
    docente: {
      nombre: string;
      correo: string;
      especialidad: string;
    },
  ) {
    const { nombre, correo, especialidad } = docente;

    const [resultado] = await pool.query(
      'UPDATE docentes SET nombre = ?, correo = ?, especialidad = ? WHERE id = ?',
      [nombre, correo, especialidad, id],
    );

    return {
      mensaje: 'Docente actualizado correctamente',
      resultado,
    };
  }

  // Eliminar un docente
  async eliminar(id: number) {
    const [resultado] = await pool.query(
      'DELETE FROM docentes WHERE id = ?',
      [id],
    );

    return {
      mensaje: 'Docente eliminado correctamente',
      resultado,
    };
  }
}