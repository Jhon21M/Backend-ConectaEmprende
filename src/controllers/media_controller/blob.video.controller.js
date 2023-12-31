import { BlobServiceClient } from '@azure/storage-blob'
import { config } from 'dotenv'

config()
const blobService = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING)

export const uploadBlob = async (req, res) => {
    try {
        const { container } = req.body
        console.log(req.file)
        const { originalname, buffer } = req.file

        const containerClient = blobService.getContainerClient(container);

        await containerClient.getBlockBlobClient(originalname).uploadData(buffer);

        res.json({ "message": "success" })
    
    } catch (error) {
        res.status(505).json({ "message": error.message })
    }
}

export const getBlob = async (req, res) => {
    try {
        const { container, fileName } = req.params;

        const containerClient = blobService.getContainerClient(container);

        res.header("Content-Type", "image/jpg");

        const response = await containerClient.getBlockBlobClient(fileName).downloadToBuffer();

        res.send(response)
    } catch (error) {
        res.status(505).json({ "message": error.message })
    }
}

export const downloadBlob = async (req, res) => {
    try {
        const { container, fileName } = req.params;

        const containerClient = blobService.getContainerClient(container);

        const response = await containerClient.getBlockBlobClient(fileName).downloadToBuffer();

        res.send(response)
    } catch (error) {
        res.status(505).json({ "message": error.message })
    }
}