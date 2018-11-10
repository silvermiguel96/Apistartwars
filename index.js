const express = require('express');
const app = express();
const {PORT} = require( './router/conection');
const mongo = require('./db/conection');

require("./router/person.js")(app);

// Ruta general 
app.get('/', function(req, res){
    res.send('Hello index')
})

app.get('*/*', function (req, res){
    res.send('Ruta no encontrada')
})
async function initMongo(){
    const db = await mongo.connect();
    if(db) {initExpress();}
}

function initExpress() {
    app.listen(PORT, function(){
        console.log( `Escuchando en el puerto ${PORT}`)
        
    })
}

initMongo();