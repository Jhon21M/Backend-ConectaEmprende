const { PrismaClient } = require('@prisma/client');
import { BlobServiceClient } from '@azure/storage-blob'
import { error } from 'console';
import { config } from 'dotenv'
const prisma = new PrismaClient();

config()
const blobService = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING)

export const listBlob = async (req, res) => {
    console.log('\nlistando los blobs...');

    const { container } = req.body
    const containerClient = blobService.getContainerClient(container);


    // Listadando los blobs en un contenedor.
    for await (const blob of containerClient.listBlobsFlat()) {
        // Get Blob Client from name, to get the URL
        const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name);

        // mostrar el nombre del blob y URL
        console.log(
            `\n\nombre: ${blob.name}\n\tURL: ${tempBlockBlobClient.url}\n`
        );
    }
}

export const uploadBlob = async (req, res) => {

    const fecha = new Date()
    console.log(fecha)
    try {
        // extraccion de datos de la solicitud request
        const { container, IdColaborador } = req.body
        let descripcion = req.body.descripcion
        const { originalname, buffer, mimetype } = req.file
        console.log(req.file)

        // obtener un objeto cliente del contenedor, que ya existe
        const containerClient = blobService.getContainerClient(container);

        // obtener un objeto cliente de un blob de bloque
        const blockBlobClient = containerClient.getBlockBlobClient(originalname)

        // url que se genera de ese blob de bloque, generado con el nombre del archivo.
        const blockBlobClientUrl = blockBlobClient.url

        // Display blob name and url
        console.log(
            `\nUploading to Azure storage as blob\n\tname: ${originalname}:\n\tURL: ${blockBlobClient.url}`);

        //cargar el archivo al blob de bloque
        const uploadBlobResponse = await blockBlobClient.uploadData(buffer);
        console.log(uploadBlobResponse)

        if (!descripcion) descripcion = originalname;
        const newResource = await prisma.recurso_educativo.create({
            data: {
                titulo: originalname,
                descripcion: descripcion,
                categoria: mimetype,
                ruta_archivo: blockBlobClientUrl,
                colaboradores: {
                    connect: {
                        id: parseInt(IdColaborador)
                    }
                }
            },

        })

        console.log(
            `Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId} \nnew resource created: ${newResource}`
        );

        res.json({ "message": "success",newResource })
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

export const deleteBlob = async (req, res) => {
    try {
        const { container, fileName } = req.body;

        const containerClient = blobService.getContainerClient(container);

        const response = await containerClient.getBlockBlobClient(fileName).deleteIfExists();

        res.send(response)
    } catch (error) {
        res.status(505).json({ "message": error.message })
    }
}