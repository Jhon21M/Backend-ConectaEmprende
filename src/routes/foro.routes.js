import * as foroCntrl from "../controllers/foro.controller";
import { verifyToken } from "../middleware/autorization.jwt";
const {Router} = require('express');
const router = Router();

//end point para guardar un usuario
router.post('/create', foroCntrl.createForo )

//end point para obtener todos los foros
router.get('/getall', foroCntrl.listForo )

//end point para eliminar un foro
router.delete('/delete/:id', foroCntrl.deleteForo )

module.exports = router;