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
} from "../types";

//state del reducer

const initialState = {
  albums: [],
  error: null,
  loading: false,
  album: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_ALBUM:
      return {
        ...state,
        error: null
      };
    case AGREGAR_ALBUM_EXITO:
      return {
        ...state,
        error: null,
        albums: [...state.albums, action.payload]
      };
    case AGREGAR_ALBUM_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case INICIAR_DESCARGA_ALBUMS:
      return {
        ...state,
        loading: true
      };
    case DESCARGA_ALBUMS_EXITO:
      return {
        ...state,
        albums: action.payload,
        loading: false,
        error: false
      };
    case DESCARGA_ALBUMS_ERROR:
      return {
        ...state,
        error: true,
        albums: [],
        loading: false
      };
    case BUSCAR_ALBUM_ID:
      return {
        ...state,
        error: false
      };
    case ALBUM_ID_EXITO:
      return {
        ...state,
        album: action.payload,
        error: null
      };
    case ALBUM_ID_ERROR:
      return {
        ...state,
        error: true
      };

    case OBTENER_ALBUM_ELIMINAR:
      return {
        ...state,
        error: null
      };
    case ELIMINAR_ALBUM_EXITO:
      return {
        ...state,
        error: null,
        albums: state.albums.filter(album => album._id !== action.payload)
      };
    case ELIMINAR_ALBUM_ERROR:
      return {
        ...state,
        error: true
      };
    case OBTENER_FOTOALBUM_ELIMINAR:
      return {
        ...state,
        error: false
      };
    case ELIMINAR_FOTOALBUM_EXITO:
      return {
        ...state,
        error: false,
        album: state.album.imagenes.filter(imag => imag._id !== action.payload)

      };
    case ELIMINAR_FOTOALBUM_ERROR:
      return {
        ...state,
        album: {},
        error: true
      };

    default:
      return state;
  }
}
