const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


export const getUsuarioP = async (req, res) => {
    const users = await prisma.user.findMany();
    console.log("Hola");
    res.status(200).json(users);
};

export const createUsuario = async (req, res) => {
    const { nombre, apellidos, cedula, nombre_user, email, password, ubicacion } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    const fecha_registro = new Date();
    try {
        const newUser = await prisma.user.create({
            data: {
                nombre,
                apellidos,
                cedula,
                nombre_user,
                email,
                hashedPassword,
                ubicacion,
                createdAt: fecha_registro,
                updatedAt: fecha_registro
            }
        });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}


export const getusuario = async (req, res) => {
    const usuario = await prisma.user.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.status(200).json(usuario);
}

export const updateUsuario = async (req, res) => {
    const { nombre, apellidos, cedula, nombre_user, email, password, ubicacion } = req.body;
    const updatedAt = new Date();
    const usuario = await prisma.user.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            nombre,
            apellidos,
            cedula,
            nombre_user,
            email,
            password,
            ubicacion,
            updatedAt: updatedAt
        }
    });

    res.status(200).json(usuario);
}

export const deleteUsuario = async (req, res) => {
    const usuario = await prisma.user.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.status(200).json(usuario);
}

//module.exports = usuarioctrl;