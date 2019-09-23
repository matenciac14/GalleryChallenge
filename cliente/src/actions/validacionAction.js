import {
    VALIDAR_FORMULARIO,
    VALIDAR_FORMULARIO_EXITO,
    VALIDAR_FORMULARIO_ERROR
} from '../types';

export function validarFormularioAction() {
    return (dispatch) => {
        dispatch(iniciarValidacion())


    }
}

export const iniciarValidacion = () => ({
    type: VALIDAR_FORMULARIO
})

export const validacionExito = () => ({
    type: VALIDAR_FORMULARIO_EXITO
})

export const validacionError = () => ({
    type: VALIDAR_FORMULARIO_ERROR
})