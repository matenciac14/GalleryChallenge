import {
    AGREGAR_ALBUM,
    AGREGAR_ALBUM_EXITO,
    AGREGAR_ALBUM_ERROR,
    INICIAR_DESCARGA_ALBUMS,
    DESCARGA_ALBUMS_EXITO,
    DESCARGA_ALBUMS_ERROR,
    BUSCAR_ALBUM_ID,
    ALBUM_ID_EXITO,
    ALBUM_ID_ERROR,
    OBTENER_ALBUM_ELIMINAR,
    ELIMINAR_ALBUM_EXITO,
    ELIMINAR_ALBUM_ERROR,
    OBTENER_FOTOALBUM_ELIMINAR,
    ELIMINAR_FOTOALBUM_EXITO,
    ELIMINAR_FOTOALBUM_ERROR

} from '../types';

//importamos el clinete para poder hacer las peticiones a nuestro servidor
import clienteAxios from '../clienteAxios';

//funcion principal
export function crearnuevoAlbumAction(album) {
    return (dispatch) => {
        dispatch(nuevoAlbum())
        //insertar en la API
        clienteAxios.post('/album/new', album)
            .then(respuesta => {
                //console.log('------'+respuesta)
                dispatch(agregarAlbumExito(respuesta.data))
                dispatch(descargarAlbumsAction())
            })
            .catch(error => {
                //console.log(error)
                dispatch(agregarAlbumError(error))
            })

    }
}
export const nuevoAlbum = () => ({
    type: AGREGAR_ALBUM
})
export const agregarAlbumExito = (album) => ({
    type: AGREGAR_ALBUM_EXITO,
    payload: album
})
export const agregarAlbumError = (error) => ({
    type: AGREGAR_ALBUM_ERROR,
    payload: error
})

//funcion principal
export function descargarAlbumsAction() {
    return (dispatch) => {
        dispatch(iniciarDescargaAlbums())
        clienteAxios.get('/albums')
            .then(respuesta => {
                //console.log(respuesta.data)
                dispatch(descargaAbumsExito(respuesta.data))
            })
            .catch(error => {
                //console.log(error)
                dispatch(descargaAbumsError())
            })
    }
}
export const iniciarDescargaAlbums = () => ({
    type: INICIAR_DESCARGA_ALBUMS,
})
export const descargaAbumsExito = (albums) => ({
    type: DESCARGA_ALBUMS_EXITO,
    payload: albums
})
export const descargaAbumsError = () => ({
    type: DESCARGA_ALBUMS_ERROR
})

//funcion principal album
export function buscarIdAlbumAction(_id) {
    return (dispatch) => {
        dispatch(buscarIdAlbum())
        //console.log(_id)
        clienteAxios.get(`/album/${_id}`)
            .then(respuesta => {
                //console.log(respuesta.data)
                dispatch(buscarIdAlbumExito(respuesta.data))
            })
            .catch(error => {
                //console.log(error)
                dispatch(buscarIdAlbumError())
            })
    }
}
export const buscarIdAlbum = () => ({
    type: BUSCAR_ALBUM_ID
})
export const buscarIdAlbumExito = (album) => ({
    type: ALBUM_ID_EXITO,
    payload: album
})
export const buscarIdAlbumError = () => ({
    type: ALBUM_ID_ERROR
})

//funcion principal para eliminar album
export function eliminarAlbumAction(_id) {
    return (dispatch) => {
        dispatch(obtenerAlbumEliminar())
        //eliminamos de la api
        clienteAxios.delete(`/albums/${_id}`)
            .then(respuesta => {
                console.log(respuesta.data)
                dispatch(eliminarAlbumIdExito(_id))

            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const obtenerAlbumEliminar = () => ({
    type: OBTENER_ALBUM_ELIMINAR
})
export const eliminarAlbumIdExito = (_id) => ({
    type: ELIMINAR_ALBUM_EXITO,
    payload: _id
})
export const eliminarAlbumIdError = () => ({
    type: ELIMINAR_ALBUM_ERROR
})


//funcion principal para eliminar foto de album
export function eliminarFotoAlbumAction(albumId, _id) {
    return (dispatch) => {
        dispatch(obtenerFotoAlbumEliminar())
        clienteAxios.put(`/album/${albumId}/${_id}`)
            .then(respuesta => {
                console.log(respuesta.data)
                dispatch(fotoAlbumEliminarExito(_id))
                dispatch(buscarIdAlbumAction(albumId))
                dispatch(descargarAlbumsAction())
                
            })
            .catch(error => {
                console.log(error)
                dispatch(fotoAlbumEliminarError())
               

            })
    }
}
export const obtenerFotoAlbumEliminar = () => ({
    type: OBTENER_FOTOALBUM_ELIMINAR
})
export const fotoAlbumEliminarExito = (_id) => ({
    type: ELIMINAR_FOTOALBUM_EXITO,
    payload: _id
})
export const fotoAlbumEliminarError = () => ({
    type: ELIMINAR_FOTOALBUM_ERROR
})