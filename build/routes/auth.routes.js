"use strict";

var _require = require('express'),
  Router = _require.Router;
var router = Router();
var _require2 = require('../controllers/auth.controller'),
  signin = _require2.signin,
  signup = _require2.signup;
router.post('/signup', signup);
router.post('/signin', signin);
module.exports = router;