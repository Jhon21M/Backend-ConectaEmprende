"use strict";

var _require = require('../controllers/usuarioController'),
  getUsuarios = _require.getUsuarios,
  createUsuario = _require.createUsuario,
  getusuario = _require.getusuario,
  updateUsuario = _require.updateUsuario,
  deleteUsuario = _require.deleteUsuario;
var _require2 = require('express'),
  Router = _require2.Router;
var router = Router();

//end point para obtener todos los usuarios
router.get('/usuarios', getUsuarios);

//end point para guardar un usuario
router.post('/usuario', createUsuario);

//end point para obtener un usuario por id
router.get('/usuario/:id', getusuario);

//end point para actualizar un usuario
router.put('/usuario/:id', updateUsuario);

//end point para eliminar un usuario
router["delete"]('/usuario/:id', deleteUsuario);
module.exports = router;