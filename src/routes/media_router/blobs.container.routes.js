import { Router } from 'express';
import { createContainer, listContainer, deleteContainer } from '../../controllers/media_controller/container.controller'
import { verifyToken } from "../../middleware/autorization.jwt";


const containerRouter = Router();

containerRouter.post('/create', verifyToken, createContainer)

containerRouter.get('/get', verifyToken,  listContainer)

containerRouter.delete('/delete', verifyToken,  deleteContainer)

module.exports = containerRouter
