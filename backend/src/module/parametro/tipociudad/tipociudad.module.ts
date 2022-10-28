import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCiudadService } from './tipociudad.service';
import { TipoCiudadController } from './tipociudad.controller';
import { TipoCiudad } from './entities/tipociudad.entity';

@Module({
  controllers: [TipoCiudadController],
  providers: [TipoCiudadService],
  imports: [
    TypeOrmModule.forFeature( [
      TipoCiudad
    ] ),
  ],
})
export class TipoCiudadModule {}
