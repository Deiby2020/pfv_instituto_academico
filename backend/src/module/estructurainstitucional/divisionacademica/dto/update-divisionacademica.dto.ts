import { PartialType } from '@nestjs/mapped-types';
import { CreateDivisionAcademicaDto } from './create-divisionacademica.dto';
import { IsString, MinLength, IsIn, IsOptional } from 'class-validator';

export class UpdateDivisionAcademicaDto extends PartialType(CreateDivisionAcademicaDto) {

    @IsString( { message: 'Campo Estado solo permitido tipo STRING.', } )
    @MinLength(1, { message: 'Campo Estado debe ser mayor o igual a 1 carácter.', } )
    @IsIn( [ 'A', 'N', ], { message: 'Campo Estado permite valor: A y N', } )
    @IsOptional()
    readonly estado?: string;

}
