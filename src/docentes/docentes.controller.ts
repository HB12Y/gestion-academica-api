import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DocentesService } from './docentes.service';

@Controller('docentes')
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) {}

  // GET: Obtener todos los docentes
  @Get()
  obtenerTodos() {
    return this.docentesService.obtenerTodos();
  }

  // POST: Crear un docente
  @Post()
  crear(
    @Body()
    docente: {
      nombre: string;
      correo: string;
      especialidad: string;
    },
  ) {
    return this.docentesService.crear(docente);
  }

  // PATCH: Actualizar un docente
  @Patch(':id')
  actualizar(
    @Param('id') id: string,
    @Body()
    docente: {
      nombre: string;
      correo: string;
      especialidad: string;
    },
  ) {
    return this.docentesService.actualizar(Number(id), docente);
  }

  // DELETE: Eliminar un docente
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.docentesService.eliminar(Number(id));
  }
}