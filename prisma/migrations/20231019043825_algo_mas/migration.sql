/*
  Warnings:

  - You are about to drop the `calaboradores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "recurso_educativo" DROP CONSTRAINT "recurso_educativo_id_calaboradores_fkey";

-- DropTable
DROP TABLE "calaboradores";

-- CreateTable
CREATE TABLE "colaboradores" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "colaboradores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recurso_educativo" ADD CONSTRAINT "recurso_educativo_id_calaboradores_fkey" FOREIGN KEY ("id_calaboradores") REFERENCES "colaboradores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
