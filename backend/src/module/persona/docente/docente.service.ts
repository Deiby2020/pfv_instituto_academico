import { Repository, Like, DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { Docente } from './entities/docente.entity';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { PaginationDto } from '../../../common/dtos/pagination.dto';
import { DocenteCiudadDetalle } from './entities/docenteciudaddetalle.entity';
import { DocenteReferenciaContactoDetalle } from './entities/docentereferenciacontacto.entity';
import { DocenteMateriaDetalle } from './entities/docentemateriadetalle.entity';
import { DocenteCategoriaDocumentoDetalle } from './entities/docentecategoriadocumentodetalle.entity';

@Injectable()
export class DocenteService {
  private readonly logger = new Logger('DocenteService');

  constructor(
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,

    @InjectRepository(DocenteCiudadDetalle)
    private readonly docenteCiudadDetalleRepository: Repository<DocenteCiudadDetalle>,

    @InjectRepository(DocenteMateriaDetalle)
    private readonly docenteMateriaDetalleRepository: Repository<DocenteMateriaDetalle>,

    @InjectRepository(DocenteCategoriaDocumentoDetalle)
    private readonly docenteCategoriaDocumentoDetalleRepository: Repository<DocenteCategoriaDocumentoDetalle>,

    @InjectRepository(DocenteReferenciaContactoDetalle)
    private readonly docenteReferenciaContactoDetalleRepository: Repository<DocenteReferenciaContactoDetalle>,

    private readonly dataSource: DataSource,
  ) {}

  async findAll( paginationDto: PaginationDto ) {
    try {
      const { limit = 1, offset = 0, search = "", esPaginate = false, } = paginationDto;
      let listDocente = [];
      let totalPagination = 0;
      if ( esPaginate ) {
        [listDocente, totalPagination] = await this.docenteRepository.findAndCount( {
          take: limit, skip: offset,
          where: [
            { nombreadicional: Like( '%' + search + '%', ), },
          ],
          order: { created_at: "DESC", },
        } );
      } else {
        [listDocente, totalPagination] = await this.docenteRepository.findAndCount( {
          where: [
            { nombreadicional: Like( '%' + search + '%', ), },
          ],
          order: { created_at: "DESC", },
        } );
      }
      return {
        resp: 1, error: false,
        message: 'Servicio realizado exitosamente.',
        arrayDocente: listDocente,
        pagination: {
          total: totalPagination,
        },
      };
    } catch (error) {
      this.logger.error(error);
      return {
        resp: -1, error: true,
        message: 'Hubo conflictos al consultar información con el servidor.',
      };
    }
  }

  private getDateTime() {
    let date = new Date();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    let year = date.getFullYear().toString();
    
    month = (+month < 10) ? "0" + month : month;
    day = (+day < 10) ? "0" + day : day;

    let hour = date.getHours().toString();
    let minutes  = date.getMinutes().toString();
    let segundos = date.getSeconds().toString();
    let milliSeconds = date.getMilliseconds().toString();

    hour = (+hour < 10) ? "0" + hour : hour;
    minutes = (+minutes < 10) ? "0" + minutes : minutes;
    segundos = (+segundos < 10) ? "0" + segundos : segundos;

    return `${year}-${month}-${day} ${hour}:${minutes}:${segundos}:${milliSeconds}`;
  }

  async store(createDocenteDto: CreateDocenteDto) {
    try {
      const docente = this.docenteRepository.create( {
        ...createDocenteDto,

        arraynacionalidad: createDocenteDto.arraynacionalidad.filter( ( ciudad ) => ( ciudad.fkidnacionalidad !== null ) ).map( ( ciudad ) => {
          return this.docenteCiudadDetalleRepository.create( {
            fkidnacionalidad: ciudad.fkidnacionalidad,
            nacionalidad: ciudad.nacionalidad,
            created_at: this.getDateTime(),
          } );
        } ),

        arraymateria: createDocenteDto.arraymateria.filter( ( materia ) => ( materia.fkidmateria !== null ) ).map( ( materia ) => {
          return this.docenteMateriaDetalleRepository.create( {
            fkidmateria: materia.fkidmateria,
            materia: materia.materia,
            estado: (materia.estado !== 'A' && materia.estado !== 'N' ) ? 'A' : materia.estado,
            tipoprioridad: (materia.tipoprioridad !== '' ) ? 'A' : materia.tipoprioridad,
            created_at: this.getDateTime(),
          } );
        } ),

        arraycategoriadocumento: createDocenteDto.arraycategoriadocumento.filter( 
          ( categoriadocumento ) => ( categoriadocumento.fkidcategoriadocumento !== null ) 
        ).map( ( categoriadocumento ) => {
          return this.docenteCategoriaDocumentoDetalleRepository.create( {
            fkidcategoriadocumento: categoriadocumento.fkidcategoriadocumento,
            categoriadocumento: categoriadocumento.categoriadocumento,
            descripcion: categoriadocumento.descripcion,
            documento: categoriadocumento.documento,
            extension: categoriadocumento.extension,
            created_at: this.getDateTime(),
          } );
        } ),

        arrayreferenciacontactos: [],
        created_at: this.getDateTime(),
      } );
      await this.docenteRepository.save( docente );
      return {
        resp: 1, error: false,
        message: 'Docente registrado éxitosamente.',
        docente: docente,
      };
    } catch (error) {
      this.logger.error(error);
      return {
        resp: -1, error: true,
        message: 'Hubo conflictos al insertar información con el servidor.',
      };
    }
  }

  async findOne(iddocente: string) {
    const docente = await this.docenteRepository.findOne( {
      where: { iddocente: iddocente },
      relations: { arraynacionalidad: true, arraymateria: true, },
    } );
    return docente;
  }

  async edit(iddocente: string) {
    try {
      const docente = await this.findOne(iddocente);
      if ( docente ) {
        return {
          resp: 1, error: false,
          message: 'Servicio realizado exitosamente.',
          docente: docente,
        };
      }
      return {
        resp: 0, error: false,
        message: 'Docente no existe.',
      };
    } catch (error) {
      this.logger.error(error);
      return {
        resp: -1, error: true,
        message: 'Hubo conflictos al consultar información con el servidor.',
      };
    }
  }

  async show(iddocente: string) {
    try {
      const docente = await this.findOne(iddocente);
      if ( docente ) {
        return {
          resp: 1, error: false,
          message: 'Servicio realizado exitosamente.',
          docente: docente,
        };
      }
      return {
        resp: 0, error: false,
        message: 'Docente no existe.',
      };
    } catch (error) {
      this.logger.error(error);
      return {
        resp: -1, error: true,
        message: 'Hubo conflictos al consultar información con el servidor.',
      };
    }
  }

  async update(iddocente: string, updateDocenteDto: UpdateDocenteDto) {

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const docente = await this.findOne(iddocente);
      if ( docente === null ) {
        return {
          resp: 0, error: false,
          message: 'Docente no existe.',
        };
      }
      const { arraynacionalidad, arraymateria, arraycategoriadocumento, ...toUpdate } = updateDocenteDto;
      const docentePreLoad = await this.docenteRepository.preload( {
        iddocente: iddocente,
        ...toUpdate,
        concurrencia: docente.concurrencia + 1,
        updated_at: this.getDateTime(),
      } );

      if ( docentePreLoad === null ) {
        return {
          resp: 0, error: false,
          message: 'Docente no existe.',
        };
      }

      if ( arraynacionalidad ) {
        await queryRunner.manager.delete( DocenteCiudadDetalle, { fkiddocente: { iddocente: iddocente } } );
        docentePreLoad.arraynacionalidad = arraynacionalidad.filter( ( ciudad ) => ( ciudad.fkidnacionalidad !== null ) ).map( ( ciudad ) => {
          return this.docenteCiudadDetalleRepository.create( {
            fkidnacionalidad: ciudad.fkidnacionalidad,
            nacionalidad: ciudad.nacionalidad,
            created_at: this.getDateTime(),
          } );
        } );
      }

      if ( arraymateria ) {
        await queryRunner.manager.delete( DocenteMateriaDetalle, { fkiddocente: { iddocente: iddocente } } );
        docentePreLoad.arraymateria = arraymateria.filter( ( materia ) => ( materia.fkidmateria !== null ) ).map( ( materia ) => {
          return this.docenteMateriaDetalleRepository.create( {
            fkidmateria: materia.fkidmateria,
            materia: materia.materia,
            estado: (materia.estado !== 'A' && materia.estado !== 'N' ) ? 'A' : materia.estado,
            tipoprioridad: (materia.tipoprioridad !== '' ) ? 'A' : materia.tipoprioridad,
            created_at: this.getDateTime(),
          } );
        } );
      }

      if ( arraycategoriadocumento ) {
        await queryRunner.manager.delete( DocenteCategoriaDocumentoDetalle, { fkiddocente: { iddocente: iddocente } } );
        docentePreLoad.arraycategoriadocumento = arraycategoriadocumento.filter( 
            ( categoriadocumento ) => ( categoriadocumento.fkidcategoriadocumento !== null ) 
        ).map( ( categoriadocumento ) => {
          return this.docenteCategoriaDocumentoDetalleRepository.create( {
            fkidcategoriadocumento: categoriadocumento.fkidcategoriadocumento,
            categoriadocumento: categoriadocumento.categoriadocumento,
            descripcion: categoriadocumento.descripcion,
            documento: categoriadocumento.documento,
            extension: categoriadocumento.extension,
            created_at: this.getDateTime(),
          } );
        } );
      }

      const docenteUpdate = await queryRunner.manager.save( docentePreLoad );

      await queryRunner.commitTransaction();
      await queryRunner.release();

      return {
        resp: 1,
        error: false,
        message: 'Docente actualizado éxitosamente.',
        docente: docente,
        docenteUpdate: docenteUpdate,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.logger.error(error);
      return {
        resp: -1, error: true,
        message: 'Hubo conflictos al consultar información con el servidor.',
      };
    }
  }

  async delete(iddocente: string) {
    try {
      let docente = await this.findOne(iddocente);
      if ( docente === null ) {
        return {
          resp: 0, error: true,
          message: 'Docente no existe.',
        };
      }
      await this.docenteRepository.remove( docente );
      return {
        resp: 1, error: false,
        message: 'Docente eliminado éxitosamente.',
        docente: docente,
      };
    } catch (error) {
      this.logger.error(error);
      return {
        resp: -1, error: true,
        message: 'Hubo conflictos al consultar información con el servidor.',
      };
    }
  }
}
