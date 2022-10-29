import { IsString, MinLength, IsIn, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAulaDto } from './create-aula.dto';

export class UpdateAulaDto extends PartialType(CreateAulaDto) {

    @IsString( { message: 'Campo Estado solo permitido tipo STRING.', } )
    @MinLength(1, { message: 'Campo Estado debe ser mayor o igual a 1 carácter.', } )
    @IsIn( [ 'A', 'N', ], { message: 'Campo Estado permite valor: A y N', } )
    @IsOptional()
    readonly estado?: string;

}
