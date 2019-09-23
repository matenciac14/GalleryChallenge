// utilizamos types para describir paso a paso las acciones de la apliacion

//types para validar los formularios agregar fotos, album, buscador
export const VALIDAR_FORMULARIO = 'VALIDAR_FORMULARIO';
export const VALIDAR_FORMULARIO_EXITO = 'VALIDAR_FORMULARIO_EXITO'
export const VALIDAR_FORMULARIO_ERROR = 'VALIDAR_FORMULARIO_ERROR'

//*++++++++++++++++++++++   FOTOS  +++++++++++++++++++++++++++++++++++++++
//types para agregar la nueva foto
export const AGREGAR_FOTO = 'AGREGAR_FOTO';
export const AGREGAR_FOTO_EXITO = 'AGREGAR_FOTO_EXITO';
export const AGREGAR_FOTO_ERROR = 'AGREGAR_FOTO_ERROR';

//descargaremos las imagenes 
export const INICIAR_DESCARGA_IMG = 'INICIAR_DESCARGA_IMG';
export const DESCARGA_IMG_EXITO = 'DESCARGA_IMG_EXITO'
export const DESCARGA_IMG_ERROR = 'DESCARGA_IMG_ERROR'

//eliminando la imagen
export const OBTENER_IMG_ELIMINAR = 'OBTENER_IMG_ELIMINAR';
export const ELIMINAR_IMG_EXITO = 'ELIMINAR_IMG_EXITO';
export const ELIMINAR_IMG_ERROR = 'ELIMINAR_IMG_ERROR';

//buscar img
export const OBTENER_VALOR_BUSCAR = 'OBTENER_VALOR_BUSCAR';
export const BUSCAR_VALOR_EXITO = 'BUSCAR_VALOR_EXITO';
export const BUSCAR_VALOR_ERROR = 'BUSCAR_VALOR_ERROR';


//*++++++++++++++++++++++   ALBUM   +++++++++++++++++++++++++++++++++++++
//types para agregar un album
export const AGREGAR_ALBUM = 'AGREGAR_ALBUM';
export const AGREGAR_ALBUM_EXITO = 'AGREGAR_ALBUM_EXITO';
export const AGREGAR_ALBUM_ERROR = 'AGREGAR_ALBUM_ERROR';

//descargaremos lo album 
export const INICIAR_DESCARGA_ALBUM = 'INICIAR_DESCARGA_ALBUM';
export const DESCARGA_ALBUM_EXITO = 'DESCARGA_ALBUM_EXITO'
export const DESCARGA_ALBUM_ERROR = 'DESCARGA_ALBUM_ERROR'
//descargaremos las albums
export const INICIAR_DESCARGA_ALBUMS = 'INICIAR_DESCARGA_ALBUMS';
export const DESCARGA_ALBUMS_EXITO = 'DESCARGA_ALBUMS_EXITO'
export const DESCARGA_ALBUMS_ERROR = 'DESCARGA_ALBUMS_ERROR'
//descargaremos  album por su id
export const BUSCAR_ALBUM_ID = 'BUSCAR_ALBUM_ID';
export const ALBUM_ID_EXITO = 'ALBUM_ID_EXITO'
export const ALBUM_ID_ERROR = 'ALBUM_ID_ERROR'
//eliminaremos el  album por su id
export const OBTENER_ALBUM_ELIMINAR = 'OBTENER_ALBUM_ELIMINAR';
export const ELIMINAR_ALBUM_EXITO = 'ELIMINAR_ALBUM_EXITO';
export const ELIMINAR_ALBUM_ERROR = 'ELIMINAR_ALBUM_ERROR';

//eliminaremos fotos  del  album por su id
export const OBTENER_FOTOALBUM_ELIMINAR = 'OBTENER_FOTOALBUM_ELIMINAR';
export const ELIMINAR_FOTOALBUM_EXITO = 'ELIMINAR_FOTOALBUM_EXITO';
export const ELIMINAR_FOTOALBUM_ERROR = 'ELIMINAR_FOTOALBUM_ERROR';






//eliminaremos la foto del  album por su id



