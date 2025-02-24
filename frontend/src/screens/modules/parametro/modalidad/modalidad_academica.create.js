
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardComponent from '../../../../components/card';
import PaperComponent from '../../../../components/paper';
import { ButtonComponent ,InputComponent } from '../../../../components/components';
import { AuthActions } from '../../../../redux/actions/auth/auth.action';
import { ModalidadAcademicaActions } from '../../../../redux/actions/parametros/modalidad_academica.action';

function CreateModalidadAcademica( props ) {
    const { modalidadAcademica } = props;
    const navigate = useNavigate();

    React.useEffect( () => {
        props.onLimpiar();
        props.onValidateToken( onLogin ).then( (item) => {
            if ( item?.resp === 1 ) {
                props.onCreate();
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

    return (
        <>
            <PaperComponent>
                <CardComponent
                    header={"Nuevo Modalidad Academica"}
                    footer={
                        <>
                            <ButtonComponent
                                onClick={ () => props.onStore(modalidadAcademica, onBack) }
                            >
                                Guardar
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
                        <div className="form-group col-2"></div>
                        <div className="form-group col-4">
                            <InputComponent
                                label="Sigla*"
                                value={modalidadAcademica.sigla}
                                onChange={ (value) => props.setSigla(modalidadAcademica, value) }
                                error={modalidadAcademica.error.sigla}
                                message={modalidadAcademica.message.sigla}
                            />
                        </div>
                        <div className="form-group col-4">
                            <InputComponent
                                label="Nombre Modalidad Acádemica*"
                                value={modalidadAcademica.descripcion}
                                onChange={ (value) => props.setDescripcion(modalidadAcademica, value) }
                                error={modalidadAcademica.error.descripcion}
                                message={modalidadAcademica.message.descripcion}
                            />
                        </div>
                    </div>
                </CardComponent>
            </PaperComponent>
        </>
    );
}

const mapStateToProps = ( state ) => ( {
    modalidadAcademica: state.ModalidadAcademica,
} );

const mapDispatchToProps = {
    onValidateToken: AuthActions.onValidateToken,
    onLimpiar: ModalidadAcademicaActions.onLimpiar,
    onCreate: ModalidadAcademicaActions.onCreate,
    setSigla: ModalidadAcademicaActions.setSigla,
    setDescripcion: ModalidadAcademicaActions.setDescripcion,
    onStore: ModalidadAcademicaActions.onGrabar,
};

export default connect(mapStateToProps, mapDispatchToProps)( CreateModalidadAcademica );
