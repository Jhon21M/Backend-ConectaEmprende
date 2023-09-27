-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);
