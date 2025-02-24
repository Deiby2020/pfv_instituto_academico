
import toastr from 'toastr';
import Swal from 'sweetalert2';
import apiServices from "../../../utils/apiservices";
import { httpRequest } from "../../../utils/httpRequest";

const onLogin = async (body) => {
    return await httpRequest('post', apiServices.apiauth_login, {
        login: body.usuario,
        password: body.password,
    } ).then( (respta) => {
        if ( respta.resp === 0 ) {
            Swal.fire( {
                position: 'top-end',
                icon: 'warning',
                title: respta.message,
                showConfirmButton: true,
                timer: 3000,
            } );
        } else if ( respta.resp === 1 && respta.error === false ) {
            toastr.success( 'Se inicio sesión exitosamente.', '', { closeButton: true, progressBar: true, } );
        }
        return respta;
    } );
};

const onRegister = async (body) => {
    return await httpRequest('post', apiServices.apiauth_register, {
        email: body.email,
        login: body.usuario,
        password: body.password,
    } ).then( (respta) => {
        if ( respta.resp === 0 ) {
            Swal.fire( {
                position: 'top-end',
                icon: 'warning',
                title: respta.message,
                showConfirmButton: true,
                timer: 3000,
            } );
        } else if ( respta.resp === 1 && respta.error === false ) {
            toastr.success( 'Se registro exitosamente.', '', { closeButton: true, progressBar: true, } );
        }
        return respta;
    } );
};

const onValidateToken = async (body) => {
    return await httpRequest('get', apiServices.apiauth_validateToken, {
    } ).then( (respta) => {
        if ( respta.resp === 1 && respta.error === false ) {
            // toastr.success( 'Se registro exitosamente.', '', { closeButton: true, progressBar: true, } );
        } else if ( respta.error === true && respta.resp === -2 ) {
            Swal.fire( {
                position: 'top-end', icon: 'warning',
                title: 'Usuario no Autorizado',
                text: respta.message, showConfirmButton: false,
                timer: 3000,
            } );
        }
        return respta;
    } );
};

export const AuthService = {
    onLogin,
    onRegister,
    onValidateToken,
};
