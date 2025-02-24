
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardComponent from '../../../../components/card';
import PaperComponent from '../../../../components/paper';
import TableComponent from '../../../../components/table';
import { AuthActions } from '../../../../redux/actions/auth/auth.action';
import { AulaActions } from '../../../../redux/actions/estructurainstitucional/aula.action';
 
function IndexAula(props) {
    const navigate = useNavigate();

    React.useEffect( () => {
        props.onValidateToken( onLogin ).then( (item) => {
            if ( item?.resp === 1 ) {
                props.onPageAula();
            }
        } );
        return () => {};
    }, [] );

    const onLogin = () => {
        navigate( '/login' );
    };
    
    const onCreate = () => {
        navigate('/aula/create');
    };

    const onEdit = (aula) => {
        navigate(`/aula/edit/${aula.idaula}`);
    };

    const onShow = (aula) => {
        navigate(`/aula/show/${aula.idaula}`);
    };

    const setPage = (page) => {
        props.onPageAula(page + 1, props.paginate);
    };

    const setPaginate = (paginate) => {
        props.onPageAula(1, paginate);
    };

    return (
        <>
            <PaperComponent
                title={"Listado Aula"}
                create
                onCreate={onCreate}
            >
                <CardComponent
                    isSearch
                >
                    <TableComponent 
                        columns={props.columnAula}
                        dataSource={props.listAula}
                        onShow={ ( aula ) => onShow(aula) }
                        onEditar={ ( aula ) => onEdit(aula) }
                        onDelete={ ( aula ) => props.onDelete(aula) }
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
    columnAula: state.ColumnModule.columnAula,
    listAula: state.PaginationModule.listAula,
    page: state.PaginationModule.pageAula,
    pagination: state.PaginationModule.paginationAula,
    paginate: state.PaginationModule.paginateAula,
} );

const mapDispatchToProps = {
    onValidateToken: AuthActions.onValidateToken,
    onPageAula: AulaActions.onPageAula,
    onDelete: AulaActions.onDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexAula);
