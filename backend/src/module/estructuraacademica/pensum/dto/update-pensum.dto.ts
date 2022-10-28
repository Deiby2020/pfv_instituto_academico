import { PartialType } from '@nestjs/mapped-types';
import { CreatePensumDto } from './create-pensum.dto';
import { IsString, MinLength, IsIn, IsOptional } from 'class-validator';

export class UpdatePensumDto extends PartialType(CreatePensumDto) {

    @IsString( { message: 'Campo Estado solo permitido tipo STRING.', } )
    @MinLength(1, { message: 'Campo Estado debe ser mayor o igual a 1 carácter.', } )
    @IsIn( [ 'A', 'N', ], { message: 'Campo Estado permite valor: A y N', } )
    @IsOptional()
    readonly estado?: string;
}
