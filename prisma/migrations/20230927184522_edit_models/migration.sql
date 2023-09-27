/*
  Warnings:

  - You are about to drop the `Libros` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Libros" DROP CONSTRAINT "Libros_id_user_fkey";

-- DropTable
DROP TABLE "Libros";

-- DropTable
DROP TABLE "Usuarios";
