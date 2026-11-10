import { Injectable } from '@nestjs/common';
import { pool } from '../database';

@Injectable()
export class AsignaturasService {

  // Obtener todas las asignaturas
  async obtenerTodas() {
    const [asignaturas] = await pool.query(
      'SELECT * FROM asignaturas'
    );

    return asignaturas;
  }

  // Crear una asignatura
  async crear(asignatura: {
    nombre: string;
    creditos: number;
    docente_id: number;
  }) {
    const { nombre, creditos, docente_id } = asignatura;

    const [resultado] = await pool.query(
      `INSERT INTO asignaturas (nombre, creditos, docente_id)
       VALUES (?, ?, ?)`,
      [nombre, creditos, docente_id]
    );

    return {
      mensaje: 'Asignatura registrada correctamente',
      resultado,
    };
  }

  // Actualizar una asignatura
  async actualizar(
    id: string,
    asignatura: {
      nombre: string;
      creditos: number;
      docente_id: number;
    },
  ) {
    const { nombre, creditos, docente_id } = asignatura;

    const [resultado] = await pool.query(
      `UPDATE asignaturas
       SET nombre = ?, creditos = ?, docente_id = ?
       WHERE id = ?`,
      [nombre, creditos, docente_id, id]
    );

    return {
      mensaje: 'Asignatura actualizada correctamente',
      resultado,
    };
  }

  // Eliminar una asignatura
  async eliminar(id: string) {
    const [resultado] = await pool.query(
      'DELETE FROM asignaturas WHERE id = ?',
      [id]
    );

    return {
      mensaje: 'Asignatura eliminada correctamente',
      resultado,
    };
  }
}