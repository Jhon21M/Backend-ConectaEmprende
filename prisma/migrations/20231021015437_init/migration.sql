/*
  Warnings:

  - You are about to drop the `comentarios` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `like` to the `foros` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comentarios" DROP CONSTRAINT "comentarios_id_foro_fkey";

-- DropForeignKey
ALTER TABLE "comentarios" DROP CONSTRAINT "comentarios_id_user_fkey";

-- AlterTable
ALTER TABLE "foros" ADD COLUMN     "like" INTEGER NOT NULL;

-- DropTable
DROP TABLE "comentarios";

-- CreateTable
CREATE TABLE "comentario_foro" (
    "id" SERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "comentario_foro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensaje_foro" (
    "id" SERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INTEGER NOT NULL,
    "id_foro" INTEGER NOT NULL,

    CONSTRAINT "mensaje_foro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes_foro" (
    "id" SERIAL NOT NULL,
    "like" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_foro" INTEGER NOT NULL,

    CONSTRAINT "likes_foro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comentario_foro" ADD CONSTRAINT "comentario_foro_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensaje_foro" ADD CONSTRAINT "mensaje_foro_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensaje_foro" ADD CONSTRAINT "mensaje_foro_id_foro_fkey" FOREIGN KEY ("id_foro") REFERENCES "foros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes_foro" ADD CONSTRAINT "likes_foro_id_foro_fkey" FOREIGN KEY ("id_foro") REFERENCES "foros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes_foro" ADD CONSTRAINT "likes_foro_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
