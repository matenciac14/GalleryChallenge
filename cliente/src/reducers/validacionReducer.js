import {
  VALIDAR_FORMULARIO,
  VALIDAR_FORMULARIO_EXITO,
  VALIDAR_FORMULARIO_ERROR
} from "../types";

//state inicial
const initialSatate = {
  error: null
};

export default function(state = initialSatate, action) {
  switch (action.type) {
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        error: null
      };
    case VALIDAR_FORMULARIO_EXITO:
      return {
        ...state,
        error: null
      };
    case VALIDAR_FORMULARIO_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
