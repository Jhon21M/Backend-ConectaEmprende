-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nombre_user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
