import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {

  constructor(
    private readonly estudiantesService: EstudiantesService
  ) {}

  // GET - Obtener todos los estudiantes
  @Get()
  obtenerTodas() {
    return this.estudiantesService.obtenerTodos();
  }

  // POST - Crear estudiante
  @Post()
  crear(
    @Body()
    estudiante: {
      nombre: string;
      documento: string;
      correo: string;
      telefono: string;
    },
  ) {
    return this.estudiantesService.crear(estudiante);
  }

  // PATCH - Actualizar estudiante
  @Patch(':id')
  actualizar(
    @Param('id') id: string,
    @Body()
    estudiante: {
      nombre: string;
      documento: string;
      correo: string;
      telefono: string;
    },
  ) {
    return this.estudiantesService.actualizar(id, estudiante);
  }

  // DELETE - Eliminar estudiante
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.estudiantesService.eliminar(id);
  }
}