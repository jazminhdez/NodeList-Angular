var express = require('express');
var app     = express();
port        = process.argv[2] || 3002;

//DEFINIENDO DIRECTORIOS ESTATICOS
app.use(express.static(__dirname+'/Frontend'));
app.use(express.static(__dirname+'/Frontend/app'));
//MANEJADOR DE RUTAS PARA PETICIONES
//require('./BackEnd/routes.js')(app);


app.listen(port);
console.log("servidor localhost: "+ port);