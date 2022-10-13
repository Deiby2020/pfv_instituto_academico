
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CardComponent from '../../../../components/card';
import { ButtonComponent ,InputComponent, SelectComponent } from '../../../../components/components';
import PaperComponent from '../../../../components/paper';
import { EstadoData } from '../../../../data/estado.data';
import { NivelAcademicoActions } from '../../../../redux/actions/nivelAcademicoActions';

function EditNivelAcademico( props ) {
    const { nivelAcademico } = props;
    const navigate = useNavigate();
    const params = useParams();

    React.useEffect( () => {
        props.onEdit( params.idnivelacademico );
    }, [] );

    function onBack() {
        props.onLimpiar();
        navigate(-1);
    }

    return (
        <>
            <PaperComponent>
                <CardComponent
                    header={"Editar Nivel Academico"}
                    footer={
                        <>
                            <ButtonComponent
                                onClick={ () => props.onUpdate(nivelAcademico, onBack) }
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
                        <div className="form-group col-2"></div>
                        <div className="form-group col-4">
                            <InputComponent
                                label="Sigla"
                                value={nivelAcademico.sigla}
                                onChange={ (value) => props.setSigla(nivelAcademico, value) }
                                error={nivelAcademico.error.sigla}
                                message={nivelAcademico.message.sigla}
                            />
                        </div>
                        <div className="form-group col-4">
                            <InputComponent
                                label="Descripción"
                                value={nivelAcademico.descripcion}
                                onChange={ (value) => props.setDescripcion(nivelAcademico, value) }
                                error={nivelAcademico.error.descripcion}
                                message={nivelAcademico.message.descripcion}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-4"></div>
                        <div className="form-group col-4">
                            <SelectComponent 
                                data={EstadoData}
                                label={"Estado"}
                                value={nivelAcademico.estado}
                                onChange={ (value) => props.setEstado(nivelAcademico, value) }
                                error={nivelAcademico.error.estado}
                                message={nivelAcademico.message.estado}
                            />
                        </div>
                    </div>
                </CardComponent>
            </PaperComponent>
        </>
    );
}

const mapStateToProps = ( state ) => ( {
    nivelAcademico: state.NivelAcademico,
} );

const mapDispatchToProps = {
    onLimpiar: NivelAcademicoActions.onLimpiar,
    onEdit: NivelAcademicoActions.onEdit,
    setSigla: NivelAcademicoActions.setSigla,
    setDescripcion: NivelAcademicoActions.setDescripcion,
    setEstado: NivelAcademicoActions.setEstado,
    onUpdate: NivelAcademicoActions.onUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)( EditNivelAcademico );
