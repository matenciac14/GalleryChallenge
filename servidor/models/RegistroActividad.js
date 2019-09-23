const {Schema, model} = require('mongoose');

const RegistroActividad = new Schema({
    nombre:String,
    actividad: String,
    fecha: Date,
    detalle:String
});

module.exports = model('RegistroActividad', RegistroActividad);