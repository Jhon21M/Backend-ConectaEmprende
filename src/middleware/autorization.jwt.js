import { resourceLimits } from "worker_threads";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



export const verifyToken = async (req, res, next) => {
    try {
    // accedemos al token enviado del cliente
    const token = req.headers["x-access-token"];

    console.log(token)
    // si esta vacio retornamos un error
    if (!token) return res.status(403).json({message: "No token provided"})

    // si existe lo verificamos, y para ello uilizamos la variable secret
    const decoded = jwt.verify(token, process.env.SECRET)

    // eso nos devuelve un id
    req.userId =  decoded.id;

    const user = await prisma.user.findUnique(req.userId, {password: 0})
    if(!user) return res.status(404).json({message: 'User no found'})
    next() 
    } catch (error) {
        return res.status(404).json({message: 'unathorized'})
    }
}