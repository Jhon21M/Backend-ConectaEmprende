const { getUsuarios, createUsuario, getusuario, updateUsuario, deleteUsuario } = require('../controllers/usuarioController');

const {Router} = require('express');
const router = Router();

//end point para obtener todos los usuarios
router.get('/usuarios', getUsuarios )

//end point para guardar un usuario
router.post('/usuario', createUsuario )

//end point para obtener un usuario por id
router.get('/usuario/:id', getusuario )

//end point para actualizar un usuario
router.put('/usuario/:id', updateUsuario )

//end point para eliminar un usuario
router.delete('/usuario/:id', deleteUsuario )


module.exports = router;