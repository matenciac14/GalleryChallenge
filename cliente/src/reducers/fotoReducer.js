//importamos los types para mapear el reducer con las acciones
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
} from "../types";

//manejar el state de este reducer
const initialState = {
  fotos: [],
  error: null,
  loading: false,
  foto: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_FOTO:
      return {
        ...state,
        error: null
      };
    case AGREGAR_FOTO_EXITO:
      return {
        ...state,
        error: null,
        fotos: [...state.fotos, action.payload]
      };
    case AGREGAR_FOTO_ERROR:
      return {
        ...state,
        error: true
      };
    case INICIAR_DESCARGA_IMG:
      return {
        ...state,
        loading: true
      };
    case DESCARGA_IMG_EXITO:
      return {
        ...state,
        fotos: action.payload,
        loading: false,
        error: false
      };
    case DESCARGA_IMG_ERROR:
      return {
        ...state,
        fotos: [],
        error: true,
        loading: false
      };
    case OBTENER_IMG_ELIMINAR:
      return {
        ...state,
        error: null
      };
    case ELIMINAR_IMG_EXITO:
      return {
        ...state,
        error: null,
        fotos: state.fotos.filter(foto => foto._id !== action.payload)
      };
    case ELIMINAR_IMG_ERROR:
      return {
        ...state,
        error: true
      };
    case OBTENER_VALOR_BUSCAR:
      return {
        ...state,
        error: false
      };
    case BUSCAR_VALOR_EXITO:
      return {
        ...state,
        fotos: action.payload
      };
    case BUSCAR_VALOR_ERROR:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
}
