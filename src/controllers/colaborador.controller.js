const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const createColaborador = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const newUser = await prisma.colaboradores.create({
            data: {
                nombre,
                descripcion
            }
        });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })

    }

}

export const listColaboradores = async (req, res) => {
    let value = req.body.value
    if (!value) {
        const listaColaborador = await prisma.colaboradores.findMany()
        res.status(200).json(listaColaborador)
    }
    else if (value == "descripcion") {
        const listaColaborador = await prisma.colaboradores.findMany({
            select: {
                descripcion: true
            }
        })
        res.status(200).json(listaColaborador)
    }
    else if (value == "nombre") {
        const listaColaborador = await prisma.colaboradores.findMany({
            select: {
                nombre: true
            }
        })
        res.status(200).json(listaColaborador)
    }
}

export const deleteColaborador = async (req, res) => {
    const idColaborador = parseInt(req.params.id)
    const colaborador = await prisma.colaboradores.delete({
        where: {
            id: idColaborador
        }
    });
    res.status(200).json(colaborador);
}