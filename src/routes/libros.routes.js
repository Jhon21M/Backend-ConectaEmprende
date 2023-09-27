import { Router } from "express";
const router = Router()

import * as librosCtlr from "../controllers/libros.controller";

router.get('/', librosCtlr.getLibros)

export default router;