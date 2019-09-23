const {Schema, model} = require('mongoose');

const Album = new Schema({
    titulo:String,
    fecha: Date,
    imagenes:[{
        id:String,
        url:String

    } ]
});

module.exports = model('Album', Album);