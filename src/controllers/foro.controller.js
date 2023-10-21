const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const createForo = async (req, res) => {
    const { titulo, descripcion, categoria } = req.body
    try {
        const newForo = await prisma.foros.create({
            data: {
                titulo,
                descripcion,
                categoria
            }
        })

        res.status(200).json(newForo);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}

export const listForo = async (req, res) => {
    const listaForo = await prisma.foros.findMany()
    res.status(200).json(listaForo)
}

export const deleteForo = async (req, res) => {
    const idForo = req.params.id

    const foro =  await prisma.foros.delete({
        where: {
            id: parseInt(idForo)
        }
    })
    res.status(200).json({
        status: "succesful",
        "delete": foro.titulo
    });
}