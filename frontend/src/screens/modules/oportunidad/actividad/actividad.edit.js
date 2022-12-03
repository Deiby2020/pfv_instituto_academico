
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CardComponent from '../../../../components/card';
import PaperComponent from '../../../../components/paper';
import DatePickerComponent from '../../../../components/date';
import TimePickerComponent from '../../../../components/time';
import { ButtonComponent, InputComponent, SelectComponent, TextAreaComponent } from '../../../../components/components';
import { EstadoData } from '../../../../data/estado.data';
import ListadoEstadoNegocioModal from '../estadonegocio/modal/estadonegocio_listado.modal';
import ListadoTipoActividadModal from '../tipoactividad/modal/tipoactividad_listado.modal';
import ListadoAsesorResponsableModal from '../asesorresponsable/modal/asesorresponsable_listado.modal';
import { AuthActions } from '../../../../redux/actions/auth/auth.action';
import { ActividadActions } from '../../../../redux/actions/oportunidad/actividad.action';

function EditActividad( props ) {
    const { actividad } = props;
    const navigate = useNavigate();
    const params = useParams();

    const [ visibleAsesorResponsable, setVisibleAsesorResponsable ] = React.useState(false);
    const [ visibleTipoActividad, setVisibleTipoActividad ] = React.useState(false);
    const [ visibleEstadoNegocio, setVisibleEstadoNegocio ] = React.useState(false);

    React.useEffect( () => {
        props.onLimpiar();
        props.onValidateToken( onLogin ).then( (item) => {
            if ( item?.resp === 1 ) {
                props.onEdit( params.idactividad );
            }
        } );
        return () => {};
    }, [] );

    const onLogin = () => {
        navigate( '/login' );
    };

    const onBack = () => {
        props.onLimpiar();
        navigate(-1);
    };

    const onComponentAsesorResponsable = () => {
        if ( !visibleAsesorResponsable ) return null;
        return (
            <ListadoAsesorResponsableModal
                visible={visibleAsesorResponsable}
                onClose={ () => setVisibleAsesorResponsable(false) }
                onSelect={ (asesorResponsable) => {
                    props.setFKIDAsesorResponsable(actividad, asesorResponsable);
                    setVisibleAsesorResponsable(false);
                } }
            />
        );
    };

    const onComponentTipoActividad = () => {
        if ( !visibleTipoActividad ) return null;
        return (
            <ListadoTipoActividadModal
                visible={visibleTipoActividad}
                onClose={ () => setVisibleTipoActividad(false) }
                onSelect={ (tipoActividad) => {
                    props.setFKIDTipoActividad(actividad, tipoActividad);
                    setVisibleTipoActividad(false);
                } }
            />
        );
    };

    const onComponentEstadoNegocio = () => {
        if ( !visibleEstadoNegocio ) return null;
        return (
            <ListadoEstadoNegocioModal
                visible={visibleEstadoNegocio}
                onClose={ () => setVisibleEstadoNegocio(false) }
                onSelect={ (estadoNegocio) => {
                    props.setFKIDEstadoNegocio(actividad, estadoNegocio);
                    setVisibleEstadoNegocio(false);
                } }
            />
        );
    };

    return (
        <>
            { onComponentAsesorResponsable() }
            { onComponentTipoActividad() }
            { onComponentEstadoNegocio() }
            <PaperComponent>
                <CardComponent
                    header={"Editar Actividad"}
                    footer={
                        <>
                            <ButtonComponent
                                onClick={ () => props.onUpdate(actividad, onBack) }
                            >
                                Editar
                            </ButtonComponent>
                            <ButtonComponent
                                type='danger' onClick={onBack}
                            >
                                Cancelar
                            </ButtonComponent>
                        </>
                    }
                >
                    <div className="row">
                        <div className="form-group col-4">
                            <InputComponent
                                label="Identificación*"
                                value={actividad.identificacion}
                                onChange={ (value) => props.setIdentificacion(actividad, value) }
                                error={actividad.error.identificacion}
                                message={actividad.message.identificacion}
                            />
                        </div>
                        <div className="form-group col-8">
                            <InputComponent
                                label="Nombre Negocio*"
                                value={actividad.descripcion}
                                onChange={ (value) => props.setDescripcion(actividad, value) }
                                error={actividad.error.descripcion}
                                message={actividad.message.descripcion}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <InputComponent
                                label="Asesor Responsable*"
                                value={actividad.asesorresponsable}
                                onClick={ () => setVisibleAsesorResponsable(true) }
                                error={actividad.error.fkidasesorresponsable}
                                message={actividad.message.fkidasesorresponsable}
                                readOnly
                                style={{ background: 'white', cursor: 'pointer', }}
                                placeholder="SELECCIONAR ASESOR RESPONSABLE"
                            />
                        </div>
                        <div className="form-group col-3">
                            <InputComponent
                                label="Tipo Actividad*"
                                value={actividad.tipoactividad}
                                onClick={ () => setVisibleTipoActividad(true) }
                                error={actividad.error.fkidtipoactividad}
                                message={actividad.message.fkidtipoactividad}
                                readOnly
                                style={{ background: 'white', cursor: 'pointer', }}
                                placeholder="SELECCIONAR TIPO ACTIVIDAD"
                            />
                        </div>
                        <div className="form-group col-3">
                            <InputComponent
                                label="Estado Negocio*"
                                value={actividad.estadonegocio}
                                onClick={ () => setVisibleEstadoNegocio(true) }
                                error={actividad.error.fkidestadonegocio}
                                message={actividad.message.fkidestadonegocio}
                                readOnly
                                style={{ background: 'white', cursor: 'pointer', }}
                                placeholder="SELECCIONAR ESTADO NEGOCIO"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-4">
                            <DatePickerComponent
                                label="Fecha Programada*"
                                value={actividad.fechaprogramada}
                                onChange={ (value) => props.setFechaProgramada(actividad, value) }
                                error={actividad.error.fechaprogramada}
                                message={actividad.message.fechaprogramada}
                                placeholder="SELECCIONAR FECHA PROGRAMADA"
                            />
                        </div>
                        <div className="form-group col-4">
                            <TimePickerComponent
                                label="Hora Programada*"
                                value={actividad.horaprogramada}
                                onChange={ (value) => props.setHoraProgramada(actividad, value) }
                                error={actividad.error.horaprogramada}
                                message={actividad.message.horaprogramada}
                                placeholder="SELECCIONAR HORA PROGRAMADA"
                            />
                        </div>
                        <div className="form-group col-4">
                            <SelectComponent 
                                data={EstadoData}
                                label={"Estado*"}
                                value={actividad.estado}
                                onChange={ (value) => props.setEstado(actividad, value) }
                                error={actividad.error.estado}
                                message={actividad.message.estado}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12">
                            <TextAreaComponent 
                                label="Nota"
                                value={actividad.nota}
                                onChange={ (value) => props.setNota(actividad, value) }
                                rows={2}
                            />
                        </div>
                    </div>
                </CardComponent>
            </PaperComponent>
        </>
    );
}

const mapStateToProps = ( state ) => ( {
    actividad: state.Actividad,
} );

const mapDispatchToProps = {
    onValidateToken: AuthActions.onValidateToken,
    onEdit: ActividadActions.onEdit,
    onLimpiar: ActividadActions.onLimpiar,
    setFKIDTipoActividad: ActividadActions.setFKIDTipoActividad,
    setFKIDAsesorResponsable: ActividadActions.setFKIDAsesorResponsable,
    setFKIDEstadoNegocio: ActividadActions.setFKIDEstadoNegocio,
    setIdentificacion: ActividadActions.setIdentificacion,
    setDescripcion: ActividadActions.setDescripcion,
    setFechaProgramada: ActividadActions.setFechaProgramada,
    setHoraProgramada: ActividadActions.setHoraProgramada,
    setNota: ActividadActions.setNota,
    setEstado: ActividadActions.setEstado,
    onUpdate: ActividadActions.onUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)( EditActividad );
