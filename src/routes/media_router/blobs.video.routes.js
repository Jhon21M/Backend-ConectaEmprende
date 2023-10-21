import { Router } from 'express';
import multer from 'multer'
import { deleteBlob, downloadBlob, getBlob, uploadBlob } from '../../controllers/media_controller/blob.video.controller.js'
import { verifyToken } from "../../middleware/autorization.jwt";


const upload = multer()
const blobRouterV = Router();

blobRouterV.post('/create', upload.single("file"), uploadBlob)

blobRouterV.get('/get/:container/:fileName', getBlob)

blobRouterV.get('/download/:container/:fileName', downloadBlob)

 //blobRouterV.delete('/delete', verifyToken,  deleteBlob)

 module.exports = blobRouterV