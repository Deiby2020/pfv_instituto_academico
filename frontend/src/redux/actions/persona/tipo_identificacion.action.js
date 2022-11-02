
import ConfirmationComponent from "../../../components/confirmation";
import Constants from "../../constants/constans";
import { TipoIdentificacionService } from "../../services/persona/tipo_identificacion.service";
import { setHiddenLoading, setShowLoading } from "../common/loading.action";

const setInit = () => ( {
    type: Constants.tipoidentificacion_setInit,
} );

const setLimpiar = () => ( {
    type: Constants.tipoidentificacion_onLimpiar,
} );

const onChange = ( data ) => ( {
    type: Constants.tipoidentificacion_onChange,
    payload: data,
} );

const onListModule = ( data ) => ( {
    type: Constants.listModules_onChange,
    payload: data,
} );

const onPaginateModule = ( data ) => ( {
    type: Constants.paginationModules_onChange,
    payload: data,
} );

const setCreate = () => ( {
    type: Constants.tipoidentificacion_onCreate,
} );

const setShowData = ( data ) => ( {
    type: Constants.tipoidentificacion_onShow,
    payload: data,
} );

const initData = () => {
    return ( dispatch ) => {
        dispatch( setInit() );
    };
};

const onPageTipoIdentificacion = ( page = 1, paginate = 5, search = "" ) => {
    return ( dispatch ) => {
        TipoIdentificacionService.getAllTipoIdentificacion( {
            page: page, paginate: paginate, 
            search: search, esPaginate: true,
        } ).then( (result) => {
            if ( result.resp === 1 ) {
                let obj = {
                    data: {
                        name: 'listTipoIdentificacion',
                        value: result.arrayTipoIdentificacion,
                    },
                    pagination: {
                        name: 'paginationTipoIdentificacion',
                        value: result.pagination,
                    },
                    page: {
                        name: 'pageTipoIdentificacion',
                        value: page,
                    },
                    paginate: {
                        name: 'paginateTipoIdentificacion',
                        value: paginate,
                    },
                };
                dispatch( onPaginateModule(obj) );
            }
        } ).finally( () => {} );
    };
};

const getAllTipoIdentificacion = () => {
    return ( dispatch ) => {
        TipoIdentificacionService.getAllTipoIdentificacion().then( (result) => {
            if ( result.resp === 1 ) {
                let obj = {
                    name: 'listTipoIdentificacion',
                    value: result.arrayTipoIdentificacion,
                };
                dispatch( onListModule(obj) );
            }
        } ).finally( () => {} );
    };
};

const onLimpiar = () => {
    return ( dispatch ) => {
        dispatch( setLimpiar() );
    };
};

const setSigla = (tipoIdentificacion, value) => {
    return ( dispatch ) => {
        tipoIdentificacion.sigla = value;
        tipoIdentificacion.error.sigla = false;
        tipoIdentificacion.message.sigla = "";
        dispatch( onChange(tipoIdentificacion) );
    };
};

const setDescripcion = (tipoIdentificacion, value) => {
    return ( dispatch ) => {
        tipoIdentificacion.descripcion = value;
        tipoIdentificacion.error.descripcion = false;
        tipoIdentificacion.message.descripcion = "";
        dispatch( onChange(tipoIdentificacion) );
    };
};

const setEstado = (tipoIdentificacion, value) => {
    return ( dispatch ) => {
        tipoIdentificacion.estado = value;
        tipoIdentificacion.error.estado = false;
        tipoIdentificacion.message.estado = "";
        dispatch( onChange(tipoIdentificacion) );
    };
};

const setISDelete = (tipoIdentificacion, value) => {
    return ( dispatch ) => {
        tipoIdentificacion.isdelete = value;
        tipoIdentificacion.error.isdelete = false;
        tipoIdentificacion.message.isdelete = "";
        dispatch( onChange(tipoIdentificacion) );
    };
};

const onCreate = () => {
    return ( dispatch ) => {
        dispatch( setCreate() );
    };
};

const onShow = ( idtipoidentificacion ) => {
    return ( dispatch ) => {
        TipoIdentificacionService.onShow( idtipoidentificacion ).then( (result) => {
            if ( result.resp === 1 ) {
                dispatch( setShowData( result.tipoIdentificacion ) );
            }
        } ).finally( () => {} );
    };
};

const onEdit = ( idtipoidentificacion ) => {
    return ( dispatch ) => {
        TipoIdentificacionService.onEdit( idtipoidentificacion ).then( (result) => {
            if ( result.resp === 1 ) {
                dispatch( setShowData( result.tipoIdentificacion ) );
            }
        } ).finally( () => {} );
    };
};

const onGrabar = ( tipoIdentificacion, onBack ) => {
    return ( dispatch ) => {
        if ( !onValidate( tipoIdentificacion ) ) {
            dispatch( onChange( tipoIdentificacion ) );
            return;
        }
        let onStore = () => {
            dispatch( setShowLoading() );
            TipoIdentificacionService.onStore(tipoIdentificacion).then( (result) => {
                if ( result.resp === 1 ) {
                    dispatch( onLimpiar() );
                    onBack();
                }
            } ).finally( () => {
                dispatch( setHiddenLoading() );
            } );
        };
        ConfirmationComponent( {
            title: "Registrar Tipo Identificación", onOk: onStore,
            okType: "primary", content: "Estás seguro de registrar información?",
        } );
    };
};

const onUpdate = ( tipoIdentificacion, onBack ) => {
    return ( dispatch ) => {
        if ( !onValidate( tipoIdentificacion ) ) {
            dispatch( onChange( tipoIdentificacion ) );
            return;
        }
        let onUpdate = () => {
            dispatch( setShowLoading() );
            TipoIdentificacionService.onUpdate(tipoIdentificacion).then( (result) => {
                if ( result.resp === 1 ) {
                    dispatch( onLimpiar() );
                    onBack();
                }
            } ).finally( () => {
                dispatch( setHiddenLoading() );
            } );
        };
        ConfirmationComponent( {
            title: "Editar Tipo Identificación", onOk: onUpdate,
            okType: "primary", content: "Estás seguro de actualizar información?",
        } );
    };
};

function onValidate( data ) {
    let bandera = true;
    if ( data.sigla.toString().trim().length === 0 ) {
        data.error.sigla   = true;
        data.message.sigla = "Campo requerido.";
        bandera = false;
    }
    if ( data.descripcion.toString().trim().length === 0 ) {
        data.error.descripcion   = true;
        data.message.descripcion = "Campo requerido.";
        bandera = false;
    }
    if ( data.estado.toString().trim().length === 0 ) {
        data.error.estado   = true;
        data.message.estado = "Campo requerido.";
        bandera = false;
    }
    return bandera;
};

const onDelete = ( tipoIdentificacion ) => {
    return ( dispatch ) => {
        let onDelete = () => {
            dispatch( setShowLoading() );
            TipoIdentificacionService.onDelete(tipoIdentificacion).then( (result) => {
                if ( result.resp === 1 ) {
                    dispatch( onPageTipoIdentificacion() );
                }
            } ).finally( () => {
                dispatch( setHiddenLoading() );
            } );
        };
        ConfirmationComponent( {
            title: "Eliminar Tipo Identificación", onOk: onDelete,
            content: "Estás seguro de eliminar información?",
        } );
    };
};

export const TipoIdentificacionActions = {
    initData,
    onPageTipoIdentificacion,
    getAllTipoIdentificacion,
    onLimpiar,
    setSigla,
    setDescripcion,
    setEstado,
    setISDelete,
    onCreate,
    onGrabar,
    onShow,
    onEdit,
    onUpdate,
    onDelete,
};
