import { combineReducers } from 'redux';
//importamos el reducer para agregarlo al state
import fotoReducer from './fotoReducer';
import albumReducer from './albumReducer'
import validacionReducer from './validacionReducer';


export default combineReducers({
    fotos: fotoReducer, //state
    albums: albumReducer,//state
    error: validacionReducer
})