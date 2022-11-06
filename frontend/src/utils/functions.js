import toastr from 'toastr';
import { EstadoCivilData } from '../data/estado_civil.data';

const cleanObejct = ( object = {} ) => {
    for (let index in object) {
        if ( typeof object[index] === 'boolean' ) {
            object[index] = false;
        } else {
            if ( Array.isArray( object[index] ) ) {
                object[index] = [];
            } else {
                if ( typeof object[index] === 'object' ) {
                    for ( let data in object[index] ) {
                        if ( typeof object[index][data] === 'boolean' ) {
                            object[index][data] = false;
                        } else {
                            if ( Array.isArray( object[index][data] ) ) {
                                object[index][data]= [];
                            } else {
                                object[index][data] = "";
                            }
                        }
                    }
                } else {
                    object[index] = "";
                }
            }
        }
    }
};

const getValueEstado = ( estado ) => {
    if ( estado === 'A' ) return 'Activo';
    return 'InActivo';
};

const getValueGenero = ( genero ) => {
    if ( genero === 'M' ) return 'Masculino';
    return 'Femenino';
};

const getValueEstadoCivil = ( estadocivil ) => {
    for (let index = 0; index < EstadoCivilData.length; index++) {
        const element = EstadoCivilData[index];
        if ( element.value === estadocivil ) return element.title;
    }
    return '';
};

const convertDMYToYMD = ( date ) => {
    if ( date === null || typeof date === "undefined" || date === "" ) {
        return "";
    }
    let array = date.split('/');
    if ( array.length !== 3 ) return "";
    let year  = array[2];
    let month = array[1];
    let day   = array[0];

    return year + "-" + month + "-" + day;
};

const compareInitDateString = (fechainicio, fechafinal) => {
    if ( fechainicio === "" || fechafinal === "" ) return true;
    let initDate = convertDMYToYMD(fechainicio);
    let finishDate = convertDMYToYMD(fechafinal);
    if ( initDate <= finishDate ) return true;
    toastr.warning( 'Campo Fecha Inicio debe ser menor o igual a Fecha Final', '', { closeButton: true, progressBar: true, } );
    return false;

};

const compareFinishDateString = (fechainicio, fechafinal) => {
    if ( fechainicio === "" || fechafinal === "" ) return true;
    let initDate = convertDMYToYMD(fechainicio);
    let finishDate = convertDMYToYMD(fechafinal);
    if ( finishDate >= initDate ) return true;
    toastr.warning( 'Campo Fecha Final debe ser mayor o igual a Fecha Inicio', '', { closeButton: true, progressBar: true, } );
    return false;

};

const dateToString = ( date = new Date() ) => {
    let year  = date.getFullYear();
    let month = date.getMonth() + 1;
    let day   = date.getDate();

    month = month < 10 ? "0" + month : month;
    day   = day   < 10 ? "0" + day : day;

    return year + "-" + month + "-" + day;
};

const dateToYear = ( date = new Date() ) => {
    let year  = date.getFullYear();
    return year;
};

const validateEmail = ( value ) => {
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( !email.test(value) ) return false;
    return true;
};

export const Functions = {
    dateToString,
    dateToYear,
    cleanObejct,
    getValueEstado,
    getValueGenero,
    getValueEstadoCivil,
    convertDMYToYMD,
    compareInitDateString,
    compareFinishDateString,
    validateEmail,
};
