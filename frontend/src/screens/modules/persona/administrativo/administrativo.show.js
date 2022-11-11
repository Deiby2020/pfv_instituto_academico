
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CardComponent from '../../../../components/card';
import { ButtonComponent ,InputComponent } from '../../../../components/components';
import InputFileComponent from '../../../../components/inputfile';
import PaperComponent from '../../../../components/paper';
import { AdministrativoActions } from '../../../../redux/actions/persona/administrativo.action';
import { Functions } from '../../../../utils/functions';

function ShowAdministrativo( props ) {
    const { administrativo } = props;
    const navigate = useNavigate();
    const params = useParams();

    React.useEffect( () => {
        props.onShow( params.idadministrativo );
    }, [] );

    function onBack() {
        props.onLimpiar();
        navigate(-1);
    }

    return (
        <>
            <PaperComponent>
                <CardComponent
                    header={"Detalle Administrativo"}
                    footer={
                        <>
                            <ButtonComponent
                                onClick={onBack}
                            >
                                Aceptar
                            </ButtonComponent>
                        </>
                    }
                >
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active show" id="home-tab" 
                                data-toggle="tab" href="#home" role="tab" 
                                aria-controls="home" aria-selected="true"
                            >
                                Información General
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="documentodigital-tab" data-toggle="tab" href="#documentodigital" 
                                role="tab" aria-controls="documentodigital" aria-selected="false"
                            >
                                Documento Digital
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade pt-4 active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Nombre Principal"
                                        value={administrativo.nombreprincipal}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Nombre Adicional"
                                        value={administrativo.nombreadicional}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Primer Apellido"
                                        value={administrativo.apellidoprimero}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Segundo Apellido"
                                        value={administrativo.apellidosegundo}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Tipo Identificación"
                                        value={administrativo.tipoidentificacion}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Nro. Identificación"
                                        value={administrativo.numeroidentificacion}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Género"
                                        value={ Functions.getValueGenero( administrativo.genero ) }
                                        readOnly={true}
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Estado Civil"
                                        value={ Functions.getValueEstadoCivil( administrativo.estadocivil ) }
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-5">
                                    <InputComponent
                                        label="Lugar de Nacimiento*"
                                        value={administrativo.ciudadnacimiento}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-5">
                                    <InputComponent
                                        label="Residencia*"
                                        value={administrativo.ciudadresidencia}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-2">
                                    <InputComponent
                                        label="Nacimiento"
                                        value={administrativo.fechanacimiento}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className='card p-0 m-0'>
                                <div className='card-header p-0'>
                                    <h4>Nacionalidades</h4>
                                </div>
                            </div>
                            { administrativo.arraynacionalidad.length === 0 &&
                                <div className='card p-0 m-0'>
                                    <div className='card-header'>
                                        <h4>Sin Nacionalidades</h4>
                                    </div>
                                </div>
                            }
                            <div className='row' style={{ maxHeight: 350, overflowY: 'auto', overflowX: 'hidden', }}>
                                { administrativo.arraynacionalidad.map( ( item, key ) => {
                                    return (
                                        <div className="form-group col-4" key={key}>
                                            <InputComponent
                                                label={`Nacionalidad ${key + 1}`}
                                                value={item.nacionalidad}
                                                readOnly
                                            />
                                        </div>
                                    );
                                } ) }
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <InputComponent
                                        label="Email"
                                        value={administrativo.email}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Télefono"
                                        value={administrativo.telefono}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Celular"
                                        value={administrativo.celular}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <InputComponent
                                        label="Dirección"
                                        value={administrativo.direccion}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <InputComponent
                                        label="Barrio"
                                        value={administrativo.barrio}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="Manzano"
                                        value={administrativo.manzano}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group col-3">
                                    <InputComponent
                                        label="UV"
                                        value={administrativo.uv}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade pt-4" id="documentodigital" role="tabpanel" aria-labelledby="documentodigital-tab">
                            <div className="row">
                                <div className="form-group col-12">
                                    <ButtonComponent
                                        fullWidth
                                        onClick={props.onAddRowCategoriaDocumento}
                                    >
                                        Agregar
                                    </ButtonComponent>
                                </div>
                            </div>
                            <div style={{ minWidth: '100%', width: '100%', maxWidth: '100%', maxHeight: 450, overflowY: 'auto', overflowX: 'hidden', }}>
                                <div className="row">
                                    { administrativo.arraycategoriadocumento.map( ( item, key ) => {
                                        return (
                                            <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={key}>
                                                <div className="card card-sm position-relative card-success">
                                                    <i className="card-icon text-danger ion ion-ios-paper-outline"
                                                        style={ { position: 'absolute', left: -20, top: -28, } }
                                                    ></i>
                                                    <div className="card-body">
                                                        <div className="form-group col-12 pl-1">
                                                            <InputComponent
                                                                label="Categoría"
                                                                value={item.categoriadocumento}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="form-group col-12 pl-1">
                                                            <InputComponent
                                                                label="Nombre Documento"
                                                                value={item.descripcion}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="form-group col-12 pl-1">
                                                            <InputComponent
                                                                label="Estado"
                                                                value={ Functions.getValueEstado( item.estado ) }
                                                                readOnly={true}
                                                            />
                                                        </div>
                                                        <div className="form-group col-12 pl-1">
                                                            <InputFileComponent
                                                                label="Eligir Documento"
                                                                id={`administrativo-document-details-${key}`}
                                                                disabled
                                                                documento={item.documento}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    } ) }
                                </div>
                            </div>
                        </div>
                    </div>
                </CardComponent>
            </PaperComponent>
        </>
    );
}

const mapStateToProps = ( state ) => ( {
    administrativo: state.Administrativo,
} );

const mapDispatchToProps = {
    onShow: AdministrativoActions.onShow,
    onLimpiar: AdministrativoActions.onLimpiar,
};

export default connect(mapStateToProps, mapDispatchToProps)( ShowAdministrativo );
