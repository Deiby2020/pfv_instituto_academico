
const linkBackend = 'http://localhost:5000/api/v1';
// const linkBackend = 'https://institucion-academica.herokuapp.com/api/v1';

const module = {
    // seguridad: linkBackend + '/seguridad',
    
    auth: linkBackend + '',
    seguridad: linkBackend + '',
    admin: linkBackend + '',
    parametros: linkBackend + '',
    estructuraacademica: linkBackend + '',
    estructurainstitucional: linkBackend + '',
    persona: linkBackend + '',
    ofertaacademica: linkBackend + '',
    oportunidad: linkBackend + '',
};

const apiServices = {
    apiauth_login:  `${module.auth}/auth/login`,
    apiauth_register:  `${module.auth}/auth/register`,
    apiauth_validateToken:  `${module.auth}/auth/validateToken`,

    apiseguridadtiporol_index:  `${module.seguridad}/tiporol/index`,
    apiseguridadtiporol_create: `${module.seguridad}/tiporol/create`,
    apiseguridadtiporol_store:  `${module.seguridad}/tiporol/store`,
    apiseguridadtiporol_edit:   `${module.seguridad}/tiporol/edit`,
    apiseguridadtiporol_show:   `${module.seguridad}/tiporol/show`,
    apiseguridadtiporol_update: `${module.seguridad}/tiporol/update`,
    apiseguridadtiporol_delete: `${module.seguridad}/tiporol/delete`,

    apiseguridadrol_index:  `${module.seguridad}/rol/index`,
    apiseguridadrol_create: `${module.seguridad}/rol/create`,
    apiseguridadrol_store:  `${module.seguridad}/rol/store`,
    apiseguridadrol_edit:   `${module.seguridad}/rol/edit`,
    apiseguridadrol_show:   `${module.seguridad}/rol/show`,
    apiseguridadrol_update: `${module.seguridad}/rol/update`,
    apiseguridadrol_delete: `${module.seguridad}/rol/delete`,

    apiseguridadtipopermiso_index:  `${module.seguridad}/tipopermiso/index`,
    apiseguridadtipopermiso_create: `${module.seguridad}/tipopermiso/create`,
    apiseguridadtipopermiso_store:  `${module.seguridad}/tipopermiso/store`,
    apiseguridadtipopermiso_edit:   `${module.seguridad}/tipopermiso/edit`,
    apiseguridadtipopermiso_show:   `${module.seguridad}/tipopermiso/show`,
    apiseguridadtipopermiso_update: `${module.seguridad}/tipopermiso/update`,
    apiseguridadtipopermiso_delete: `${module.seguridad}/tipopermiso/delete`,

    apiseguridadpermiso_index:  `${module.seguridad}/permiso/index`,
    apiseguridadpermiso_create: `${module.seguridad}/permiso/create`,
    apiseguridadpermiso_store:  `${module.seguridad}/permiso/store`,
    apiseguridadpermiso_edit:   `${module.seguridad}/permiso/edit`,
    apiseguridadpermiso_show:   `${module.seguridad}/permiso/show`,
    apiseguridadpermiso_update: `${module.seguridad}/permiso/update`,
    apiseguridadpermiso_delete: `${module.seguridad}/permiso/delete`,

    apiseguridadusuarioroldetalle_rolusuario:  `${module.seguridad}/usuarioroldetalle/rol_usuario`,
    apiseguridadusuarioroldetalle_store:  `${module.seguridad}/usuarioroldetalle/store`,
    apiseguridadusuarioroldetalle_delete:  `${module.seguridad}/usuarioroldetalle/delete`,

    apiseguridadusuario_index:  `${module.seguridad}/usuario/index`,
    apiseguridadusuario_create: `${module.seguridad}/usuario/create`,
    apiseguridadusuario_store:  `${module.seguridad}/usuario/store`,
    apiseguridadusuario_edit:   `${module.seguridad}/usuario/edit`,
    apiseguridadusuario_show:   `${module.seguridad}/usuario/show`,
    apiseguridadusuario_update: `${module.seguridad}/usuario/update`,
    apiseguridadusuario_delete: `${module.seguridad}/usuario/delete`,

    apiadminunidadnegocio_index:  `${module.admin}/unidadnegocio/index`,
    apiadminunidadnegocio_create: `${module.admin}/unidadnegocio/create`,
    apiadminunidadnegocio_store:  `${module.admin}/unidadnegocio/store`,
    apiadminunidadnegocio_edit:   `${module.admin}/unidadnegocio/edit`,
    apiadminunidadnegocio_show:   `${module.admin}/unidadnegocio/show`,
    apiadminunidadnegocio_update: `${module.admin}/unidadnegocio/update`,
    apiadminunidadnegocio_delete: `${module.admin}/unidadnegocio/delete`,

    apiadminofertaacademica_index:  `${module.admin}/ofertaacademica/index`,
    apiadminofertaacademica_create: `${module.admin}/ofertaacademica/create`,
    apiadminofertaacademica_store:  `${module.admin}/ofertaacademica/store`,
    apiadminofertaacademica_edit:   `${module.admin}/ofertaacademica/edit`,
    apiadminofertaacademica_show:   `${module.admin}/ofertaacademica/show`,
    apiadminofertaacademica_update: `${module.admin}/ofertaacademica/update`,
    apiadminofertaacademica_delete: `${module.admin}/ofertaacademica/delete`,

    apiadminnivelacademico_index:  `${module.admin}/nivelacademico/index`,
    apiadminnivelacademico_create: `${module.admin}/nivelacademico/create`,
    apiadminnivelacademico_store:  `${module.admin}/nivelacademico/store`,
    apiadminnivelacademico_edit:   `${module.admin}/nivelacademico/edit`,
    apiadminnivelacademico_show:   `${module.admin}/nivelacademico/show`,
    apiadminnivelacademico_update: `${module.admin}/nivelacademico/update`,
    apiadminnivelacademico_delete: `${module.admin}/nivelacademico/delete`,

    apiadminmodalidadacademica_index:  `${module.admin}/modalidadacademica/index`,
    apiadminmodalidadacademica_create: `${module.admin}/modalidadacademica/create`,
    apiadminmodalidadacademica_store:  `${module.admin}/modalidadacademica/store`,
    apiadminmodalidadacademica_edit:   `${module.admin}/modalidadacademica/edit`,
    apiadminmodalidadacademica_show:   `${module.admin}/modalidadacademica/show`,
    apiadminmodalidadacademica_update: `${module.admin}/modalidadacademica/update`,
    apiadminmodalidadacademica_delete: `${module.admin}/modalidadacademica/delete`,

    apiadminperiodo_index:  `${module.admin}/periodo/index`,
    apiadminperiodo_create: `${module.admin}/periodo/create`,
    apiadminperiodo_store:  `${module.admin}/periodo/store`,
    apiadminperiodo_edit:   `${module.admin}/periodo/edit`,
    apiadminperiodo_show:   `${module.admin}/periodo/show`,
    apiadminperiodo_update: `${module.admin}/periodo/update`,
    apiadminperiodo_delete: `${module.admin}/periodo/delete`,

    apiadmintipomateria_index:  `${module.admin}/tipomateria/index`,
    apiadmintipomateria_create: `${module.admin}/tipomateria/create`,
    apiadmintipomateria_store:  `${module.admin}/tipomateria/store`,
    apiadmintipomateria_edit:   `${module.admin}/tipomateria/edit`,
    apiadmintipomateria_show:   `${module.admin}/tipomateria/show`,
    apiadmintipomateria_update: `${module.admin}/tipomateria/update`,
    apiadmintipomateria_delete: `${module.admin}/tipomateria/delete`,

    apiadminmateria_index:  `${module.admin}/materia/index`,
    apiadminmateria_create: `${module.admin}/materia/create`,
    apiadminmateria_store:  `${module.admin}/materia/store`,
    apiadminmateria_edit:   `${module.admin}/materia/edit`,
    apiadminmateria_show:   `${module.admin}/materia/show`,
    apiadminmateria_update: `${module.admin}/materia/update`,
    apiadminmateria_delete: `${module.admin}/materia/delete`,

    apiparametrosadmintipociudad_index:  `${module.parametros}/tipociudad/index`,
    apiparametrosadmintipociudad_create: `${module.parametros}/tipociudad/create`,
    apiparametrosadmintipociudad_store:  `${module.parametros}/tipociudad/store`,
    apiparametrosadmintipociudad_edit:   `${module.parametros}/tipociudad/edit`,
    apiparametrosadmintipociudad_show:   `${module.parametros}/tipociudad/show`,
    apiparametrosadmintipociudad_update: `${module.parametros}/tipociudad/update`,
    apiparametrosadmintipociudad_delete: `${module.parametros}/tipociudad/delete`,

    apiparametrosadminciudad_index:  `${module.parametros}/ciudad/index`,
    apiparametrosadminciudad_create: `${module.parametros}/ciudad/create`,
    apiparametrosadminciudad_store:  `${module.parametros}/ciudad/store`,
    apiparametrosadminciudad_edit:   `${module.parametros}/ciudad/edit`,
    apiparametrosadminciudad_show:   `${module.parametros}/ciudad/show`,
    apiparametrosadminciudad_update: `${module.parametros}/ciudad/update`,
    apiparametrosadminciudad_delete: `${module.parametros}/ciudad/delete`,

    apiestructuraacademicaunidadadministrativa_index:  `${module.estructuraacademica}/unidadadministrativa/index`,
    apiestructuraacademicaunidadadministrativa_create: `${module.estructuraacademica}/unidadadministrativa/create`,
    apiestructuraacademicaunidadadministrativa_store:  `${module.estructuraacademica}/unidadadministrativa/store`,
    apiestructuraacademicaunidadadministrativa_edit:   `${module.estructuraacademica}/unidadadministrativa/edit`,
    apiestructuraacademicaunidadadministrativa_show:   `${module.estructuraacademica}/unidadadministrativa/show`,
    apiestructuraacademicaunidadadministrativa_update: `${module.estructuraacademica}/unidadadministrativa/update`,
    apiestructuraacademicaunidadadministrativa_delete: `${module.estructuraacademica}/unidadadministrativa/delete`,

    apiestructuraacademicaunidadacademica_index:  `${module.estructuraacademica}/unidadacademica/index`,
    apiestructuraacademicaunidadacademica_create: `${module.estructuraacademica}/unidadacademica/create`,
    apiestructuraacademicaunidadacademica_store:  `${module.estructuraacademica}/unidadacademica/store`,
    apiestructuraacademicaunidadacademica_edit:   `${module.estructuraacademica}/unidadacademica/edit`,
    apiestructuraacademicaunidadacademica_show:   `${module.estructuraacademica}/unidadacademica/show`,
    apiestructuraacademicaunidadacademica_update: `${module.estructuraacademica}/unidadacademica/update`,
    apiestructuraacademicaunidadacademica_delete: `${module.estructuraacademica}/unidadacademica/delete`,

    apiestructuraacademicaprograma_index:  `${module.estructuraacademica}/programa/index`,
    apiestructuraacademicaprograma_create: `${module.estructuraacademica}/programa/create`,
    apiestructuraacademicaprograma_store:  `${module.estructuraacademica}/programa/store`,
    apiestructuraacademicaprograma_edit:   `${module.estructuraacademica}/programa/edit`,
    apiestructuraacademicaprograma_show:   `${module.estructuraacademica}/programa/show`,
    apiestructuraacademicaprograma_update: `${module.estructuraacademica}/programa/update`,
    apiestructuraacademicaprograma_delete: `${module.estructuraacademica}/programa/delete`,

    apiestructuraacademicapensum_index:  `${module.estructuraacademica}/pensum/index`,
    apiestructuraacademicapensum_create: `${module.estructuraacademica}/pensum/create`,
    apiestructuraacademicapensum_store:  `${module.estructuraacademica}/pensum/store`,
    apiestructuraacademicapensum_edit:   `${module.estructuraacademica}/pensum/edit`,
    apiestructuraacademicapensum_show:   `${module.estructuraacademica}/pensum/show`,
    apiestructuraacademicapensum_update: `${module.estructuraacademica}/pensum/update`,
    apiestructuraacademicapensum_delete: `${module.estructuraacademica}/pensum/delete`,

    apiestructuraacademicaresponsable_index:  `${module.estructuraacademica}/responsable/index`,
    apiestructuraacademicaresponsable_create: `${module.estructuraacademica}/responsable/create`,
    apiestructuraacademicaresponsable_store:  `${module.estructuraacademica}/responsable/store`,
    apiestructuraacademicaresponsable_edit:   `${module.estructuraacademica}/responsable/edit`,
    apiestructuraacademicaresponsable_show:   `${module.estructuraacademica}/responsable/show`,
    apiestructuraacademicaresponsable_update: `${module.estructuraacademica}/responsable/update`,
    apiestructuraacademicaresponsable_delete: `${module.estructuraacademica}/responsable/delete`,



    apiestructurainstitucionalaula_index:  `${module.estructurainstitucional}/aula/index`,
    apiestructurainstitucionalaula_create: `${module.estructurainstitucional}/aula/create`,
    apiestructurainstitucionalaula_store:  `${module.estructurainstitucional}/aula/store`,
    apiestructurainstitucionalaula_edit:   `${module.estructurainstitucional}/aula/edit`,
    apiestructurainstitucionalaula_show:   `${module.estructurainstitucional}/aula/show`,
    apiestructurainstitucionalaula_update: `${module.estructurainstitucional}/aula/update`,
    apiestructurainstitucionalaula_delete: `${module.estructurainstitucional}/aula/delete`,

    apiestructurainstitucionalturno_index:  `${module.estructurainstitucional}/turno/index`,
    apiestructurainstitucionalturno_create: `${module.estructurainstitucional}/turno/create`,
    apiestructurainstitucionalturno_store:  `${module.estructurainstitucional}/turno/store`,
    apiestructurainstitucionalturno_edit:   `${module.estructurainstitucional}/turno/edit`,
    apiestructurainstitucionalturno_show:   `${module.estructurainstitucional}/turno/show`,
    apiestructurainstitucionalturno_update: `${module.estructurainstitucional}/turno/update`,
    apiestructurainstitucionalturno_delete: `${module.estructurainstitucional}/turno/delete`,

    apiestructurainstitucionaldivisionacademica_index:  `${module.estructurainstitucional}/divisionacademica/index`,
    apiestructurainstitucionaldivisionacademica_create: `${module.estructurainstitucional}/divisionacademica/create`,
    apiestructurainstitucionaldivisionacademica_store:  `${module.estructurainstitucional}/divisionacademica/store`,
    apiestructurainstitucionaldivisionacademica_edit:   `${module.estructurainstitucional}/divisionacademica/edit`,
    apiestructurainstitucionaldivisionacademica_show:   `${module.estructurainstitucional}/divisionacademica/show`,
    apiestructurainstitucionaldivisionacademica_update: `${module.estructurainstitucional}/divisionacademica/update`,
    apiestructurainstitucionaldivisionacademica_delete: `${module.estructurainstitucional}/divisionacademica/delete`,

    apiestructurainstitucionalinstitucion_index:  `${module.estructurainstitucional}/institucion/index`,
    apiestructurainstitucionalinstitucion_create: `${module.estructurainstitucional}/institucion/create`,
    apiestructurainstitucionalinstitucion_store:  `${module.estructurainstitucional}/institucion/store`,
    apiestructurainstitucionalinstitucion_edit:   `${module.estructurainstitucional}/institucion/edit`,
    apiestructurainstitucionalinstitucion_show:   `${module.estructurainstitucional}/institucion/show`,
    apiestructurainstitucionalinstitucion_update: `${module.estructurainstitucional}/institucion/update`,
    apiestructurainstitucionalinstitucion_delete: `${module.estructurainstitucional}/institucion/delete`,

    apiestructurainstitucionalgestionperiodo_index:  `${module.estructurainstitucional}/gestionperiodo/index`,
    apiestructurainstitucionalgestionperiodo_create: `${module.estructurainstitucional}/gestionperiodo/create`,
    apiestructurainstitucionalgestionperiodo_store:  `${module.estructurainstitucional}/gestionperiodo/store`,
    apiestructurainstitucionalgestionperiodo_edit:   `${module.estructurainstitucional}/gestionperiodo/edit`,
    apiestructurainstitucionalgestionperiodo_show:   `${module.estructurainstitucional}/gestionperiodo/show`,
    apiestructurainstitucionalgestionperiodo_update: `${module.estructurainstitucional}/gestionperiodo/update`,
    apiestructurainstitucionalgestionperiodo_delete: `${module.estructurainstitucional}/gestionperiodo/delete`,



    apipersonatipoidentificacion_index:  `${module.persona}/tipoidentificacion/index`,
    apipersonatipoidentificacion_create: `${module.persona}/tipoidentificacion/create`,
    apipersonatipoidentificacion_store:  `${module.persona}/tipoidentificacion/store`,
    apipersonatipoidentificacion_edit:   `${module.persona}/tipoidentificacion/edit`,
    apipersonatipoidentificacion_show:   `${module.persona}/tipoidentificacion/show`,
    apipersonatipoidentificacion_update: `${module.persona}/tipoidentificacion/update`,
    apipersonatipoidentificacion_delete: `${module.persona}/tipoidentificacion/delete`,

    apipersonacategoriadocumento_index:  `${module.persona}/categoriadocumento/index`,
    apipersonacategoriadocumento_create: `${module.persona}/categoriadocumento/create`,
    apipersonacategoriadocumento_store:  `${module.persona}/categoriadocumento/store`,
    apipersonacategoriadocumento_edit:   `${module.persona}/categoriadocumento/edit`,
    apipersonacategoriadocumento_show:   `${module.persona}/categoriadocumento/show`,
    apipersonacategoriadocumento_update: `${module.persona}/categoriadocumento/update`,
    apipersonacategoriadocumento_delete: `${module.persona}/categoriadocumento/delete`,

    apipersonacargo_index:  `${module.persona}/cargo/index`,
    apipersonacargo_create: `${module.persona}/cargo/create`,
    apipersonacargo_store:  `${module.persona}/cargo/store`,
    apipersonacargo_edit:   `${module.persona}/cargo/edit`,
    apipersonacargo_show:   `${module.persona}/cargo/show`,
    apipersonacargo_update: `${module.persona}/cargo/update`,
    apipersonacargo_delete: `${module.persona}/cargo/delete`,

    apipersonadocente_index:  `${module.persona}/docente/index`,
    apipersonadocente_create: `${module.persona}/docente/create`,
    apipersonadocente_store:  `${module.persona}/docente/store`,
    apipersonadocente_edit:   `${module.persona}/docente/edit`,
    apipersonadocente_show:   `${module.persona}/docente/show`,
    apipersonadocente_update: `${module.persona}/docente/update`,
    apipersonadocente_delete: `${module.persona}/docente/delete`,

    apipersonaestudiante_index:  `${module.persona}/estudiante/index`,
    apipersonaestudiante_create: `${module.persona}/estudiante/create`,
    apipersonaestudiante_store:  `${module.persona}/estudiante/store`,
    apipersonaestudiante_edit:   `${module.persona}/estudiante/edit`,
    apipersonaestudiante_show:   `${module.persona}/estudiante/show`,
    apipersonaestudiante_update: `${module.persona}/estudiante/update`,
    apipersonaestudiante_delete: `${module.persona}/estudiante/delete`,

    apipersonaadministrativo_index:  `${module.persona}/administrativo/index`,
    apipersonaadministrativo_create: `${module.persona}/administrativo/create`,
    apipersonaadministrativo_store:  `${module.persona}/administrativo/store`,
    apipersonaadministrativo_edit:   `${module.persona}/administrativo/edit`,
    apipersonaadministrativo_show:   `${module.persona}/administrativo/show`,
    apipersonaadministrativo_update: `${module.persona}/administrativo/update`,
    apipersonaadministrativo_delete: `${module.persona}/administrativo/delete`,


    apiofertaacademicacurso_index:  `${module.ofertaacademica}/curso/index`,
    apiofertaacademicacurso_create: `${module.ofertaacademica}/curso/create`,
    apiofertaacademicacurso_store:  `${module.ofertaacademica}/curso/store`,
    apiofertaacademicacurso_edit:   `${module.ofertaacademica}/curso/edit`,
    apiofertaacademicacurso_show:   `${module.ofertaacademica}/curso/show`,
    apiofertaacademicacurso_update: `${module.ofertaacademica}/curso/update`,
    apiofertaacademicacurso_delete: `${module.ofertaacademica}/curso/delete`,
    apiofertaacademicacurso_aperturarcerrarcurso: `${module.ofertaacademica}/curso/aperturarcerrarcurso`,
    apiofertaacademicacurso_cierrecurso: `${module.ofertaacademica}/curso/cierrecurso`,

    apiofertaacademicamotivoaperturacierrecurso_index:  `${module.ofertaacademica}/motivoaperturacierrecurso/index`,
    apiofertaacademicamotivoaperturacierrecurso_create: `${module.ofertaacademica}/motivoaperturacierrecurso/create`,
    apiofertaacademicamotivoaperturacierrecurso_store:  `${module.ofertaacademica}/motivoaperturacierrecurso/store`,
    apiofertaacademicamotivoaperturacierrecurso_edit:   `${module.ofertaacademica}/motivoaperturacierrecurso/edit`,
    apiofertaacademicamotivoaperturacierrecurso_show:   `${module.ofertaacademica}/motivoaperturacierrecurso/show`,
    apiofertaacademicamotivoaperturacierrecurso_update: `${module.ofertaacademica}/motivoaperturacierrecurso/update`,
    apiofertaacademicamotivoaperturacierrecurso_delete: `${module.ofertaacademica}/motivoaperturacierrecurso/delete`,

    apiofertaacademicagrupo_index:  `${module.ofertaacademica}/grupo/index`,
    apiofertaacademicagrupo_create: `${module.ofertaacademica}/grupo/create`,
    apiofertaacademicagrupo_store:  `${module.ofertaacademica}/grupo/store`,
    apiofertaacademicagrupo_edit:   `${module.ofertaacademica}/grupo/edit`,
    apiofertaacademicagrupo_show:   `${module.ofertaacademica}/grupo/show`,
    apiofertaacademicagrupo_update: `${module.ofertaacademica}/grupo/update`,
    apiofertaacademicagrupo_delete: `${module.ofertaacademica}/grupo/delete`,



    apioportunidadtipoactividad_index:  `${module.oportunidad}/tipoactividad/index`,
    apioportunidadtipoactividad_create: `${module.oportunidad}/tipoactividad/create`,
    apioportunidadtipoactividad_store:  `${module.oportunidad}/tipoactividad/store`,
    apioportunidadtipoactividad_edit:   `${module.oportunidad}/tipoactividad/edit`,
    apioportunidadtipoactividad_show:   `${module.oportunidad}/tipoactividad/show`,
    apioportunidadtipoactividad_update: `${module.oportunidad}/tipoactividad/update`,
    apioportunidadtipoactividad_delete: `${module.oportunidad}/tipoactividad/delete`,

    apioportunidadtipomediopublicitario_index:  `${module.oportunidad}/tipomediopublicitario/index`,
    apioportunidadtipomediopublicitario_create: `${module.oportunidad}/tipomediopublicitario/create`,
    apioportunidadtipomediopublicitario_store:  `${module.oportunidad}/tipomediopublicitario/store`,
    apioportunidadtipomediopublicitario_edit:   `${module.oportunidad}/tipomediopublicitario/edit`,
    apioportunidadtipomediopublicitario_show:   `${module.oportunidad}/tipomediopublicitario/show`,
    apioportunidadtipomediopublicitario_update: `${module.oportunidad}/tipomediopublicitario/update`,
    apioportunidadtipomediopublicitario_delete: `${module.oportunidad}/tipomediopublicitario/delete`,

    apioportunidadtipocontacto_index:  `${module.parametros}/referenciacontacto/index`,
    apioportunidadtipocontacto_create: `${module.parametros}/referenciacontacto/create`,
    apioportunidadtipocontacto_store:  `${module.parametros}/referenciacontacto/store`,
    apioportunidadtipocontacto_edit:   `${module.parametros}/referenciacontacto/edit`,
    apioportunidadtipocontacto_show:   `${module.parametros}/referenciacontacto/show`,
    apioportunidadtipocontacto_update: `${module.parametros}/referenciacontacto/update`,
    apioportunidadtipocontacto_delete: `${module.parametros}/referenciacontacto/delete`,

    apioportunidadestadonegocio_index:  `${module.parametros}/estadonegocio/index`,
    apioportunidadestadonegocio_create: `${module.parametros}/estadonegocio/create`,
    apioportunidadestadonegocio_store:  `${module.parametros}/estadonegocio/store`,
    apioportunidadestadonegocio_edit:   `${module.parametros}/estadonegocio/edit`,
    apioportunidadestadonegocio_show:   `${module.parametros}/estadonegocio/show`,
    apioportunidadestadonegocio_update: `${module.parametros}/estadonegocio/update`,
    apioportunidadestadonegocio_delete: `${module.parametros}/estadonegocio/delete`,

    apioportunidadasesorresponsable_index:  `${module.parametros}/asesorresponsable/index`,
    apioportunidadasesorresponsable_create: `${module.parametros}/asesorresponsable/create`,
    apioportunidadasesorresponsable_store:  `${module.parametros}/asesorresponsable/store`,
    apioportunidadasesorresponsable_edit:   `${module.parametros}/asesorresponsable/edit`,
    apioportunidadasesorresponsable_show:   `${module.parametros}/asesorresponsable/show`,
    apioportunidadasesorresponsable_update: `${module.parametros}/asesorresponsable/update`,
    apioportunidadasesorresponsable_delete: `${module.parametros}/asesorresponsable/delete`,

    apioportunidadnegocio_index:  `${module.parametros}/negocio/index`,
    apioportunidadnegocio_create: `${module.parametros}/negocio/create`,
    apioportunidadnegocio_store:  `${module.parametros}/negocio/store`,
    apioportunidadnegocio_edit:   `${module.parametros}/negocio/edit`,
    apioportunidadnegocio_show:   `${module.parametros}/negocio/show`,
    apioportunidadnegocio_update: `${module.parametros}/negocio/update`,
    apioportunidadnegocio_delete: `${module.parametros}/negocio/delete`,

    apioportunidadactividad_index:  `${module.parametros}/actividad/index`,
    apioportunidadactividad_create: `${module.parametros}/actividad/create`,
    apioportunidadactividad_store:  `${module.parametros}/actividad/store`,
    apioportunidadactividad_edit:   `${module.parametros}/actividad/edit`,
    apioportunidadactividad_show:   `${module.parametros}/actividad/show`,
    apioportunidadactividad_update: `${module.parametros}/actividad/update`,
    apioportunidadactividad_delete: `${module.parametros}/actividad/delete`,

    apioportunidadoportunidad_index:  `${module.parametros}/oportunidad/index`,
    apioportunidadoportunidad_create: `${module.parametros}/oportunidad/create`,
    apioportunidadoportunidad_store:  `${module.parametros}/oportunidad/store`,
    apioportunidadoportunidad_edit:   `${module.parametros}/oportunidad/edit`,
    apioportunidadoportunidad_show:   `${module.parametros}/oportunidad/show`,
    apioportunidadoportunidad_update: `${module.parametros}/oportunidad/update`,
    apioportunidadoportunidad_delete: `${module.parametros}/oportunidad/delete`,
};

export default apiServices;
