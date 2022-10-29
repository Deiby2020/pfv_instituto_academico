import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AulaService } from './aula.service';
import { AulaController } from './aula.controller';
import { Aula } from './entities/aula.entity';

@Module({
  controllers: [AulaController],
  providers: [AulaService],
  imports: [
    TypeOrmModule.forFeature( [
      Aula
    ] ),
  ],
})
export class AulaModule {}
