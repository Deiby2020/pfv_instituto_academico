
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MateriaActions } from '../../../../redux/actions/parametros/materia.action';
import TableComponent from '../../../../components/table';
import PaperComponent from '../../../../components/paper';
import CardComponent from '../../../../components/card';
 
function IndexMateria(props) {
    const navigate = useNavigate();

    useEffect( () => {
      props.onPageMateria();
      return () => {};
    }, [] );
    

    const onCreate = () => {
        navigate('/materia/create');
    };

    const onEdit = (materia) => {
        navigate(`/materia/edit/${materia.idmateria}`);
    };

    const onShow = (materia) => {
        navigate(`/materia/show/${materia.idmateria}`);
    };

    const setPage = (page) => {
        props.onPageMateria(page + 1, props.paginate);
    };

    const setPaginate = (paginate) => {
        props.onPageMateria(1, paginate);
    };

    return (
        <>
            <PaperComponent
                title={"Listado Materia"}
                create
                onCreate={onCreate}
            >
                <CardComponent
                    isSearch
                >
                    <TableComponent 
                        columns={props.columnMateria}
                        dataSource={props.listMateria}
                        onShow={ ( materia ) => onShow(materia) }
                        onEditar={ ( materia ) => onEdit(materia) }
                        onDelete={ ( materia ) => props.onDelete(materia) }
                        isPagination={true}
                        pagination={props.pagination}
                        paginate={props.paginate}
                        page={props.page - 1}
                        setPage={setPage}
                        setPaginate={setPaginate}
                    />
                </CardComponent>
            </PaperComponent>
        </>
    );
};

const mapStateToProps = ( state ) => ( {
    columnMateria: state.ColumnModule.columnMateria,
    listMateria: state.PaginationModule.listMateria,
    page: state.PaginationModule.pageMateria,
    pagination: state.PaginationModule.paginationMateria,
    paginate: state.PaginationModule.paginateMateria,
} );

const mapDispatchToProps = {
    onPageMateria: MateriaActions.onPageMateria,
    onDelete: MateriaActions.onDelete,
};


export default connect(mapStateToProps, mapDispatchToProps)(IndexMateria);
