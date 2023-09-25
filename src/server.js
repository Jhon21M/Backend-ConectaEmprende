/*Descripción: Archivo principal del servidor,
aqui se establecen las configuraciones del servidor*/

//se importan los modulos necesarios
import server from 'express';
import morgan from 'morgan';
const app = server();



//settings, aqui se establecen las configuraciones del servidor
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);


/*middlewares, son subconjunto de funciones encadenadas llamadas 
por la capa de enrutamiento Express js antes de invocar el 
controlador definido por el usuario*/
app.use(server.json());
app.use(server.urlencoded({extended: false}));
app.use(morgan('dev'));


//routes, aqui se establecen las rutas del servidor
//app.use(require('./routes/tarea.routes'));


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});