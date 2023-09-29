import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const verifyToken = async (req, res, next) => {
    // accedemos al token enviado del cliente
    const token = req.headers["x-access-token"];

    console.log(token);
    // si esta vacio retornamos un error
    if (!token) return res.status(403).json({ message: "No token provided" });
    console.log("hola 1")

    try {
        // si existe lo verificamos, y para ello uilizamos la variable secret, si conincide...
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log(decoded)
        // eso nos devuelve un id
        const id = decoded.sub;

        const user = await prisma.user.findUnique({
            where: {
                id: id,
            }
        })
          

        if (!user) return res.status(404).json({ message: "Unauthorizad" });
        next();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};
