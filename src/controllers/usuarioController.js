const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const usuarioctrl = {};



usuarioctrl.getUsuarios = async (req, res) => {
    const users = await prisma.user.findMany();
    console.log("Hola");
    res.status(200).json(users);
};

usuarioctrl.createUsuario = async (req, res) => {
    const {nombre, apellidos, cedula, nombre_user, email, password, ubicacion} = req.body;
    const fecha_registro = new Date();
    const newUser = await prisma.user.create({
        data: {
            nombre,
            apellidos,
            cedula,
            nombre_user,
            email,
            password,
            ubicacion,
            createdAt: fecha_registro,
            updatedAt: fecha_registro
        }
    });
    res.status(200).json(newUser);}


usuarioctrl.getusuario = async (req, res) => {
    const usuario = await prisma.user.findUnique({
        where: {
            id: parseInt(req.params.id)
        }});
    res.status(200).json(usuario);
}

usuarioctrl.updateUsuario = async (req, res) => {
    const {nombre, apellidos, cedula, nombre_user, email, password, ubicacion} = req.body;
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
            updatedAt
        }});

        res.status(200).json(usuario);}

usuarioctrl.deleteUsuario = async (req, res) => {
    const usuario = await prisma.user.delete({
        where: {
            id: parseInt(req.params.id)
        }});
    res.status(200).json(usuario);
}

module.exports = usuarioctrl;