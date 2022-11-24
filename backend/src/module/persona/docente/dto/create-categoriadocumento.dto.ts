import { IsOptional, IsIn } from 'class-validator';

export class CreateDocenteCategoriaDocumentoDetalleDto {

    @IsOptional()
    readonly fkidcategoriadocumento?: string;

    @IsOptional()
    readonly categoriadocumento?: string;

    @IsOptional()
    readonly descripcion?: string;

    @IsOptional()
    readonly documento?: string;

    @IsOptional()
    readonly extension?: string;

    @IsIn( [ 'A', 'N', ], { message: 'Campo Estado permite valor: A y N', } )
    @IsOptional()
    readonly estado?: string;

}
