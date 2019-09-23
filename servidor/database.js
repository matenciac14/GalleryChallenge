const mongoose = require ('mongoose');

mongoose.connect( process.env.MONGODB_URI, {
    useNewUrlParser: true
})
.then(db => console.log('base de datos conectada'))
.catch(error => console.error(error))