
import apiServices from "../../../utils/apiservices";
import { httpRequest } from "../../../utils/httpRequest";
import Swal from 'sweetalert2';
import toastr from 'toastr';

const getAllInstitucion = async ( {
    page = 1, paginate = 1, 
    search = "", esPaginate = false,
} ) => {
    return await httpRequest('get', apiServices.apiestructurainstitucionalinstitucion_index, {
        search: search,
        offset: page - 1,
        limit: paginate,
        esPaginate: esPaginate,
    } ).then( (respta) => {
        if ( respta.resp === 1 && respta.error === false ) {
            toastr.success( respta.message, '', { closeButton: true, progressBar: true, positionClass: "toast-bottom-right", } );
        }
        return respta;
    } );
};

const onStore = async (body) => {
    return await httpRequest('post', apiServices.apiestructurainstitucionalinstitucion_store, {
        fkidciudad: body.fkidciudad,
        ciudad: body.ciudad,
        sigla: body.sigla,
        descripcion: body.descripcion,
        nit: body.nit,
        telefono: body.telefono,
        celular: body.celular,
        direccion: body.direccion,
        email: body.email,
    } ).then( (respta) => {
        if ( respta.resp === 1 && respta.error === false ) {
            Swal.fire( {
                position: 'top-end',
                icon: 'success',
                title: respta.message,
                showConfirmButton: false,
                timer: 3000,
            } );
        }
        return respta;
    } );
};

const onShow = async (idinstitucion) => {
    return await httpRequest('get', apiServices.apiestructurainstitucionalinstitucion_show + `/${idinstitucion}`, {
    } ).then( (respta) => {
        if ( respta.resp === 1 && respta.error === false ) {
            toastr.success( respta.message, '', { closeButton: true, progressBar: true, } );
        }
        return respta;
    } );
};

const onEdit = async (idinstitucion) => {
    return await httpRequest('get', apiServices.apiestructurainstitucionalinstitucion_edit + `/${idinstitucion}`, {
    } ).then( (respta) => {
        if ( respta.resp === 1 && respta.error === false ) {
            toastr.success( respta.message, '', { closeButton: true, progressBar: true, } );
        }
        return respta;
    } );
};

const onUpdate = async (body) => {
    return await httpRequest('put', apiServices.apiestructurainstitucionalinstitucion_update + `/${body.idinstitucion}`, {
        fkidciudad: body.fkidciudad,
        ciudad: body.ciudad,
        sigla: body.sigla,
        descripcion: body.descripcion,
        nit: body.nit,
        telefono: body.telefono,
        celular: body.celular,
        direccion: body.direccion,
        email: body.email,
        estado: body.estado,
    } ).then( (respta) => {
        if ( respta.resp === 1 && respta.error === false ) {
            Swal.fire( {
                position: 'top-end',
                icon: 'success',
                title: respta.message,
                showConfirmButton: false,
                timer: 3000,
            } );
        }
        return respta;
    } );
};

const onDelete = async (body) => {
    return await httpRequest('delete', apiServices.apiestructurainstitucionalinstitucion_delete + `/${body.idinstitucion}`, {
    } ).then( (respta) => {
        if ( respta.resp === 1 && respta.error === false ) {
            Swal.fire( {
                position: 'top-end',
                icon: 'success',
                title: respta.message,
                showConfirmButton: false,
                timer: 3000,
            } );
        }
        return respta;
    } );
};

export const InstitucionService = {
    getAllInstitucion,
    onStore,
    onEdit,
    onShow,
    onUpdate,
    onDelete,
};
