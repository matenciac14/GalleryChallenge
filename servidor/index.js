
if(process.env.NODE_ENV !== 'production'){//verificamos el entorno actual en el que corre nuestra app
require('dotenv').config();//me permite leer la variable de entorno definida para la db
}
const app = require('./app');


app.listen(app.get('port'),()=>{
    console.log('servidor en puerto' + app.get('port') )
})