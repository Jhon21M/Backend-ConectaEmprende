const { PrismaClient } = require("@prisma/client");
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
    return signToken(newUser.id, newUser.email);
  } catch (error) {
    // if (error instanceof PrismaClientKnownRequestError) {
    //   if (error.code === 'P2002') {
    //     throw new error('Email already in use');
    //   }
    // }
    // throw error;
    console.log(error);
  }
};
export const signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await this.prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  // if user does not exist throw exception
  if (!user) throw new ForbiddenException("Incorrect credentials");

  //comparar las contraseñas
  const pwMatches = await argon.verify(user.hash, dto.password);

  // si no son iguales, lanza un error
  if (!pwMatches) throw new ForbiddenException("Incorrect credentials");

  //devuelve el toquen al usuario
  return this.signToken(user.id, user.email);
};
export const signToken = async (userId, email) => {
  const payload = {
    sub: userId,
    email,
  };
  const Secret = process.env.SECRET;

  const config = {
    expiresIn: "15m",
  };

  const token = await jwt.sign(payload, Secret, config);

  return {
    access_token: token,
  };
};
