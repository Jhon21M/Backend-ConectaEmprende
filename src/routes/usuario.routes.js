//const { getUsuarios, createUsuario, getusuario, updateUsuario, deleteUsuario } = require('../controllers/usuarioController');
import * as userCntrl from "../controllers/usuarioController";
import verifyToken from "../middleware/autorization.jwt";
const {Router} = require('express');
const router = Router();

//end point para obtener todos los usuarios
router.get('/usuarios', verifyToken, userCntrl.getUsuarioP )

//end point para guardar un usuario
router.post('/usuario', verifyToken, userCntrl.createUsuario )

//end point para obtener un usuario por id
router.get('/usuario/:id', verifyToken, userCntrl.getusuario )

//end point para actualizar un usuario
router.put('/usuario/:id', verifyToken, userCntrl.updateUsuario )

//end point para eliminar un usuario
router.delete('/usuario/:id', verifyToken, userCntrl.deleteUsuario )


module.exports = router;