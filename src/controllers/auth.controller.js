import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import jwt from "jsonwebtoken";
import argon from "argon2";
import "dotenv/config";

const prisma = new PrismaClient();
//import bcrypt from 'bcrypt'

export const signup = async (req, res) => {
    try {
        //const hashedPassword =  bcrypt.hash(req.body.password, 10);
        const {
            nombre,
            apellidos,
            cedula,
            nombre_user,
            email,
            password,
            ubicacion,
        } = req.body;
        const hashedPassword = await argon.hash(password);
        const fecha_registro = new Date();

        const newUser = await prisma.user.create({
            data: {
                nombre,
                apellidos,
                cedula,
                nombre_user,
                email,
                password: hashedPassword,
                ubicacion,
                createdAt: fecha_registro,
                updatedAt: fecha_registro,
            },
        });
          

        return res.json({
            Access_token: await signToken(newUser.id, newUser.email)
        });
        
 
            
      
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                throw new error("Email already in use");
            }
        }
        throw error;
        console.log(error);
    }
};
export const signin = async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    console.log(user)

    // si no existe retorna un error
    if (!user) return res.status(404).json({message: "Email is incorrect or doesn't exist"});
    console.log("hola2")
    //comparar las contraseñas
    console.log(user.hash)
    const pwMatches = await argon.verify(user.password, password);
    console.log("hola3")
    // si no son iguales, retorna un error
    if (!pwMatches) return res.status(404).json({message: "Incorrect password"});


    //devuelver un toquen al user
    return res.json({
        Access_token: await signToken(user.id, user.email)
    });
    
};

export const signToken = async (userId, email) => {
    const payload = {
        sub: userId,
        email,
    };
    const Secret = process.env.JWT_SECRET;

    const config = {
        expiresIn: "15m",
    };
   
    const token = await jwt.sign(payload, Secret, config);



    return token;

};
