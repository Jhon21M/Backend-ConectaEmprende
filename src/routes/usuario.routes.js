import * as userCntrl from "../controllers/usuarioController";
import { verifyToken } from "../middleware/autorization.jwt";
const {Router} = require('express');
const router = Router();

//end point para obtener todos los usuarios
router.get('/getall', userCntrl.getUsuarioP )

//end point para guardar un usuario
router.post('/usuario', userCntrl.createUsuario )

//end point para obtener un usuario por id
router.get('/:id', verifyToken, userCntrl.getusuario )

//end point para actualizar un usuario
router.put('/:id', verifyToken, userCntrl.updateUsuario )

//end point para eliminar un usuario
router.delete('/delete/:id', userCntrl.deleteUsuario )


module.exports = router;