import { Router } from 'express';
import multer from 'multer'
import { verifyToken } from "../../middleware/autorization.jwt";
import { deleteBlob, downloadBlob, getBlob, uploadBlob, listBlob } from '../../controllers/media_controller/blob.image.controller.js'

const upload = multer()
const blobRouterI = Router();

blobRouterI.post('/create', upload.single("file"), uploadBlob)

blobRouterI.get('/list', listBlob)

blobRouterI.get('/get/:container/:fileName', verifyToken, getBlob)

blobRouterI.get('/download/:container/:fileName', downloadBlob)

blobRouterI.delete('/delete',  deleteBlob)

module.exports = blobRouterI