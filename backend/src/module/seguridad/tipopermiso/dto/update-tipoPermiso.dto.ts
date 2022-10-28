import { PartialType } from "@nestjs/mapped-types";
import { IsIn, IsOptional, IsString, MinLength,  } from "class-validator";
import { CreateTipoPermisoDto } from "./create-tipoPermiso.dto";

export class UpdateTipoPermisoDto extends PartialType(CreateTipoPermisoDto) {

    @IsString( { message: 'Campo Estado solo permitido tipo STRING.', } )
    @MinLength(1, { message: 'Campo Estado debe ser mayor o igual a 1 carácter.', } )
    @IsIn( [ 'A', 'N', ], { message: 'Campo Estado permite valor: A y N', } )
    @IsOptional()
    readonly estado?: string;

}
