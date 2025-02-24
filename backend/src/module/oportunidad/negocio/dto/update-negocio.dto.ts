import { PartialType } from '@nestjs/mapped-types';
import { CreateNegocioDto } from './create-negocio.dto';
import { IsString, IsIn, IsOptional } from 'class-validator';

export class UpdateNegocioDto extends PartialType(CreateNegocioDto) {

    @IsString( { message: 'Campo Estado solo permitido tipo STRING.', } )
    @IsIn( [ 'A', 'N', ], { message: 'Campo Estado permite valor: A y N', } )
    @IsOptional()
    readonly estado?: string;

}
