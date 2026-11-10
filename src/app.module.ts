import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DocentesController } from './docentes/docentes.controller';
import { DocentesService } from './docentes/docentes.service';

import { AsignaturasController } from './asignaturas/asignaturas.controller';
import { AsignaturasService } from './asignaturas/asignaturas.service';

import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    DocentesController,
    AsignaturasController,
    EstudiantesController,
  ],
  providers: [
    AppService,
    DocentesService,
    AsignaturasService,
    EstudiantesService,
  ],
})
export class AppModule {}