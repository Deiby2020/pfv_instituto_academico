
import ConfirmationComponent from "../../../components/confirmation";
import Constants from "../../constants/constans";
import { AulaService } from "../../services/estructurainstitucional/aula.service";
import { setHiddenLoading, setShowLoading } from "../common/loading.action";

const setInit = () => ( {
    type: Constants.aula_setInit,
} );

const setLimpiar = () => ( {
    type: Constants.aula_onLimpiar,
} );

const onChange = ( data ) => ( {
    type: Constants.aula_onChange,
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
    type: Constants.aula_onCreate,
} );

const setShowData = ( data ) => ( {
    type: Constants.aula_onShow,
    payload: data,
} );

const initData = () => {
    return ( dispatch ) => {
        dispatch( setInit() );
    };
};

const onPageAula = ( page = 1, paginate = 5, search = "" ) => {
    return ( dispatch ) => {
        AulaService.getAllAula( {
            page: page, paginate: paginate, 
            search: search, esPaginate: true,
        } ).then( (result) => {
            if ( result.resp === 1 ) {
                let obj = {
                    data: {
                        name: 'listAula',
                        value: result.arrayAula,
                    },
                    pagination: {
                        name: 'paginationAula',
                        value: result.pagination,
                    },
                    page: {
                        name: 'pageAula',
                        value: page,
                    },
                    paginate: {
                        name: 'paginateAula',
                        value: paginate,
                    },
                };
                dispatch( onPaginateModule(obj) );
            }
        } ).finally( () => {} );
    };
};

const getAllAula = () => {
    return ( dispatch ) => {
        AulaService.getAllAula().then( (result) => {
            if ( result.resp === 1 ) {
                let obj = {
                    name: 'listAula',
                    value: result.arrayAula,
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

const setSigla = (aula, value) => {
    return ( dispatch ) => {
        aula.sigla = value;
        aula.error.sigla = false;
        aula.message.sigla = "";
        dispatch( onChange(aula) );
    };
};

const setDescripcion = (aula, value) => {
    return ( dispatch ) => {
        aula.descripcion = value;
        aula.error.descripcion = false;
        aula.message.descripcion = "";
        dispatch( onChange(aula) );
    };
};

const setEstado = (aula, value) => {
    return ( dispatch ) => {
        aula.estado = value;
        aula.error.estado = false;
        aula.message.estado = "";
        dispatch( onChange(aula) );
    };
};

const setISDelete = (aula, value) => {
    return ( dispatch ) => {
        aula.isdelete = value;
        aula.error.isdelete = false;
        aula.message.isdelete = "";
        dispatch( onChange(aula) );
    };
};

const onCreate = () => {
    return ( dispatch ) => {
        dispatch( setCreate() );
    };
};

const onShow = ( idaula ) => {
    return ( dispatch ) => {
        AulaService.onShow( idaula ).then( (result) => {
            if ( result.resp === 1 ) {
                dispatch( setShowData( result.aula ) );
            }
        } ).finally( () => {} );
    };
};

const onEdit = ( idaula ) => {
    return ( dispatch ) => {
        AulaService.onEdit( idaula ).then( (result) => {
            if ( result.resp === 1 ) {
                dispatch( setShowData( result.aula ) );
            }
        } ).finally( () => {} );
    };
};

const onGrabar = ( aula, onBack ) => {
    return ( dispatch ) => {
        if ( !onValidate( aula ) ) {
            dispatch( onChange( aula ) );
            return;
        }
        let onStore = () => {
            dispatch( setShowLoading() );
            AulaService.onStore(aula).then( (result) => {
                if ( result.resp === 1 ) {
                    dispatch( onLimpiar() );
                    onBack();
                }
            } ).finally( () => {
                dispatch( setHiddenLoading() );
            } );
        };
        ConfirmationComponent( {
            title: "Registrar Aula", onOk: onStore,
            okType: "primary", content: "Estás seguro de registrar información?",
        } );
    };
};

const onUpdate = ( aula, onBack ) => {
    return ( dispatch ) => {
        if ( !onValidate( aula ) ) {
            dispatch( onChange( aula ) );
            return;
        }
        let onUpdate = () => {
            dispatch( setShowLoading() );
            AulaService.onUpdate(aula).then( (result) => {
                if ( result.resp === 1 ) {
                    dispatch( onLimpiar() );
                    onBack();
                }
            } ).finally( () => {
                dispatch( setHiddenLoading() );
            } );
        };
        ConfirmationComponent( {
            title: "Editar Aula", onOk: onUpdate,
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

const onDelete = ( aula ) => {
    return ( dispatch ) => {
        let onDelete = () => {
            dispatch( setShowLoading() );
            AulaService.onDelete(aula).then( (result) => {
                if ( result.resp === 1 ) {
                    dispatch( onPageAula() );
                }
            } ).finally( () => {
                dispatch( setHiddenLoading() );
            } );
        };
        ConfirmationComponent( {
            title: "Eliminar Aula", onOk: onDelete,
            content: "Estás seguro de eliminar información?",
        } );
    };
};

export const AulaActions = {
    initData,
    onPageAula,
    getAllAula,
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
