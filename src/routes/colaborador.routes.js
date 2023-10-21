import { verifyToken } from "../middleware/autorization.jwt";
import * as colabCntrl from "../controllers/colaborador.controller";
const {Router} = require('express');
const router = Router();

//end point para obtener todos los colaboradores
router.get('/getall', colabCntrl.listColaboradores )

//end point para guardar un colaborador
router.post('/create', colabCntrl.createColaborador )

//end point para obtener un colaborador por id
//router.get('/:id', verifyToken, userCntrl.getusuario )

//end point para actualizar un colaborador
//router.put('/:id', verifyToken, userCntrl.updateUsuario )

//end point para eliminar un colaborador
router.delete('/delete/:id', colabCntrl.deleteColaborador )


module.exports = router;