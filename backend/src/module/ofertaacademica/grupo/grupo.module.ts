import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoService } from './grupo.service';
import { Grupo } from './entities/grupo.entity';
import { AuthModule } from '../../auth/auth.module';
import { GrupoController } from './grupo.controller';

@Module({
  controllers: [GrupoController],
  providers: [GrupoService],
  imports: [
    TypeOrmModule.forFeature( [
      Grupo,
    ] ),
    AuthModule,
  ],
})
export class GrupoModule {}
