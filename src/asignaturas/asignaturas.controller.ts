import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { AsignaturasService } from './asignaturas.service';

@Controller('asignaturas')
export class AsignaturasController {

  constructor(
    private readonly asignaturasService: AsignaturasService
  ) {}

  // GET - Obtener todas las asignaturas
  @Get()
  obtenerTodas() {
    return this.asignaturasService.obtenerTodas();
  }

  // POST - Crear una asignatura
  @Post()
  crear(
    @Body()
    asignatura: {
      nombre: string;
      creditos: number;
      docente_id: number;
    },
  ) {
    return this.asignaturasService.crear(asignatura);
  }

  // PATCH - Actualizar una asignatura
  @Patch(':id')
  actualizar(
    @Param('id') id: string,
    @Body()
    asignatura: {
      nombre: string;
      creditos: number;
      docente_id: number;
    },
  ) {
    return this.asignaturasService.actualizar(id, asignatura);
  }

  // DELETE - Eliminar una asignatura
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.asignaturasService.eliminar(id);
  }
}