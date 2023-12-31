/*Descripción: Archivo principal del servidor,
aqui se establecen las configuraciones del servidor*/

//se importan los modulos necesarios
const server = require('express');
const morgan = require('morgan');
const app = server();
import 'dotenv/config'


import cors from "cors";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from 'url';

dotenv.config();

// importacion de modulos
import usuarioRoute from "./routes/usuario.routes";
import colaboradorRoute from "./routes/colaborador.routes";
import authRoute from "./routes/auth.routes";
import blobRouterI from "./routes/media_router/blobs.image.routes";
import blobRouterV from "./routes/media_router/blobs.video.routes";
import containerRouter from "./routes/media_router/blobs.container.routes";
import foroRouter from "./routes/foro.routes";





//const __dirname = dirname(fileURLToPath(import.meta.url))
//datos 
//import libros from './routes/libros.routes';
//import authRoutes from './routes/auth.routes'


//settings, aqui se establecen las configuraciones del servidor
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);
const corsOptions = { credentials: true, origin: process.env.url || '*' }


/*middlewares, son subconjunto de funciones encadenadas llamadas 
por la capa de enrutamiento Express js antes de invocar el 
controlador definido por el usuario*/
app.use(server.json());
app.use(server.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(cors(corsOptions))
app.use(cookieParser())

// espcificamos que leera achivos static de x carpeta
//app.use('/', server.static(join(__dirname, 'public')));


//uso de las rutas importadas, aqui se establecen las rutas del servidor
app.use('/auth', authRoute)
app.use('/usuario', usuarioRoute)
app.use('/colaborador', colaboradorRoute)
app.use('/storage/image', blobRouterI)
app.use('/storage/video', blobRouterV)
app.use('/container', containerRouter)
app.use('/foro', foroRouter)




//routes, elton
//app.use(require('./routes/usuario.routes'));
///app.use(require('./routes/auth.routes'));
//app.use(require('./routes/libros.routes'));

//datos de prueba para autenticacion
//app.use(libros);
//app.use(require('./routes/auth.routes'));



app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});