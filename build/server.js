"use strict";

var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _path = require("path");
var _url = require("url");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*Descripción: Archivo principal del servidor,
aqui se establecen las configuraciones del servidor*/

//se importan los modulos necesarios

var server = require('express');
var morgan = require('morgan');
var app = server();
require('dotenv').config();
_dotenv["default"].config();
var _dirname = (0, _path.dirname)((0, _url.fileURLToPath)(import.meta.url));
//datos 
//import libros from './routes/libros.routes';
//import authRoutes from './routes/auth.routes'

//settings, aqui se establecen las configuraciones del servidor
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);
var corsOptions = {
  credentials: true,
  origin: process.env.url || '*'
};

/*middlewares, son subconjunto de funciones encadenadas llamadas 
por la capa de enrutamiento Express js antes de invocar el 
controlador definido por el usuario*/
app.use(server.json());
app.use(server.urlencoded({
  extended: false
}));
app.use(morgan('dev'));
app.use((0, _cors["default"])(corsOptions));
app.use((0, _cookieParser["default"])());

// espcificamos que leera achivos static de x carpeta
app.use('/', express["static"]((0, _path.join)(_dirname, 'public')));

//routes, aqui se establecen las rutas del servidor
app.use(require('./routes/usuario.routes'));
app.use(require('./routes/auth.routes'));
//app.use(require('./routes/libros.routes'));

//datos de prueba para autenticacion
//app.use(libros);
//app.use(require('./routes/auth.routes'));

app.listen(app.get('port'), function () {
  console.log("Server on port ".concat(app.get('port')));
});