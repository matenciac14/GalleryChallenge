//importamos los types para mapear el reducer con los reducer
import {
    AGREGAR_FOTO,
    AGREGAR_FOTO_EXITO,
    AGREGAR_FOTO_ERROR,
    INICIAR_DESCARGA_IMG,
    DESCARGA_IMG_EXITO,
    DESCARGA_IMG_ERROR,
    OBTENER_IMG_ELIMINAR,
    ELIMINAR_IMG_EXITO,
    ELIMINAR_IMG_ERROR,
    OBTENER_VALOR_BUSCAR,
    BUSCAR_VALOR_EXITO,
    BUSCAR_VALOR_ERROR
} from '../types';

//importamos el clinete para poder hacer las peticiones a nuestro servidor
import clienteAxios from '../clienteAxios';

// creamos una funcion principal que es llamada desde el componente
export function crearNuevaFotoAction(foto) {
    return (dispatch) => {
        //ejecutamos la primera funcion para activar la accion
        dispatch(nuevaFoto())
        // insertamos los datos en la API
        const data = new FormData()
        data.append('titulo', foto.titulo)
        data.append('descripcion', foto.descripcion)
        data.append('image', foto.image)
        data.append('fecha', foto.fecha)

        clienteAxios.post('/photo/new', data)
            .then(respuesta => {
                //console.log(respuesta)
                //realizamos la accion requerida con exito
                dispatch(agregarFotoExito(foto))
                dispatch(obtenerFotosAction())
            }).catch(error => {
                //console.log(error)
                dispatch(agregarFotoError())
            })

    }
}

export const nuevaFoto = () => ({
    type: AGREGAR_FOTO
})
export const agregarFotoExito = (foto) => ({
    type: AGREGAR_FOTO_EXITO,
    payload: foto
})
export const agregarFotoError = (error) => ({
    type: AGREGAR_FOTO_ERROR,
})



//creamos la funcion principal para descarga de fotos
export function obtenerFotosAction() {
    return (dispatch) => {
        dispatch(iniciarDescarga())
        clienteAxios.get('/')
            .then(respuesta => {
                //console.log(respuesta.data)
                dispatch(descargaImgExitosa(respuesta.data))
            })
            .catch(error => {
                //console.log(error)
                dispatch(descargaImgError())
            })
    }
}

export const iniciarDescarga = () => ({
    type: INICIAR_DESCARGA_IMG
})
export const descargaImgExitosa = (fotos) => ({
    type: DESCARGA_IMG_EXITO,
    payload: fotos
})
export const descargaImgError = () => ({
    type: DESCARGA_IMG_ERROR
})


//creamos la funcion principal para eliminar

export function eliminarFotoAction(_id) {
    return (dispatch) => {
        dispatch(obtenerImgEliminar())
        //eliminar en la api
        clienteAxios.delete(`/photo/${_id}`)
            .then(respuesta => {
                console.log(respuesta)
                dispatch(eliminarImgExito(_id))
                dispatch(obtenerFotosAction())
            })
            .catch(error => {
                dispatch(eliminarImgError())
            })
    }
}

export const obtenerImgEliminar = () => ({
    type: OBTENER_IMG_ELIMINAR
})
export const eliminarImgExito = (_id) => ({
    type: ELIMINAR_IMG_EXITO,
    payload: _id
})
export const eliminarImgError = () => ({
    type: ELIMINAR_IMG_ERROR
})


//creamos la funcion principal de busqueda
export function busquedaTerminoAction(resultado) {
    return (dispatch) => {
        dispatch(obtenertermino())
        if (resultado) {
            dispatch(busquedaTerminoExito(resultado))
        } else {
            dispatch(obtenerFotosAction())
        }
    }
}
export const obtenertermino = () => ({
    type: OBTENER_VALOR_BUSCAR
})
export const busquedaTerminoExito = (resultado) => ({
    type: BUSCAR_VALOR_EXITO,
    payload: resultado
})
export const busquedaTerminoError = () => ({
    type: BUSCAR_VALOR_ERROR
})