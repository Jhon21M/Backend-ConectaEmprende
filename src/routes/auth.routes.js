const {Router} = require('express');
const router = Router();

import * as authCotrl from "../controllers/auth.controller";

router.post('/signup', authCotrl.signup)

router.post('/signin', authCotrl.signin)

module.exports = router