import { Injectable } from '@nestjs/common';
import { pool } from '../database';

@Injectable()
export class EstudiantesService {

  // Obtener todos los estudiantes
  async obtenerTodos() {
    const [estudiantes] = await pool.query(
      'SELECT * FROM estudiantes'
    );

    return estudiantes;
  }

  // Crear estudiante
  async crear(estudiante: {
    nombre: string;
    documento: string;
    correo: string;
    telefono: string;
  }) {
    const { nombre, documento, correo, telefono } = estudiante;

    const [resultado] = await pool.query(
      `INSERT INTO estudiantes (nombre, documento, correo, telefono)
       VALUES (?, ?, ?, ?)`,
      [nombre, documento, correo, telefono]
    );

    return {
      mensaje: 'Estudiante registrado correctamente',
      resultado,
    };
  }

  // Actualizar estudiante
  async actualizar(
    id: string,
    estudiante: {
      nombre: string;
      documento: string;
      correo: string;
      telefono: string;
    },
  ) {
    const { nombre, documento, correo, telefono } = estudiante;

    const [resultado] = await pool.query(
      `UPDATE estudiantes
       SET nombre = ?, documento = ?, correo = ?, telefono = ?
       WHERE id = ?`,
      [nombre, documento, correo, telefono, id]
    );

    return {
      mensaje: 'Estudiante actualizado correctamente',
      resultado,
    };
  }

  // Eliminar estudiante
  async eliminar(id: string) {
    const [resultado] = await pool.query(
      'DELETE FROM estudiantes WHERE id = ?',
      [id]
    );

    return {
      mensaje: 'Estudiante eliminado correctamente',
      resultado,
    };
  }
}