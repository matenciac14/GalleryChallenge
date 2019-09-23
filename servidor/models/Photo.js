const {Schema, model} = require('mongoose');

const Photo = new Schema({
    titulo:String,
    descripcion: String,
    imageURL: String,
    fecha: Date,
    public_id : String
});

module.exports = model('Photo', Photo);