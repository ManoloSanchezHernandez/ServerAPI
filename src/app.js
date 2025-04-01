const express = require('express');
const config = require('./config');
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutasUsuarios');

const app = express();
app.use(express.json());



//configuracion 
app.set('port',config.app.port);

//Rutas
app.use('/api/clientes',clientes);


app.use('/api/usuarios',usuarios);
    
//Exportacion de el componente app, para poder ser usado 
module.exports= app;
