/*
  Warnings:

  - You are about to drop the column `id_calaboradores` on the `recurso_educativo` table. All the data in the column will be lost.
  - Added the required column `id_colaboradores` to the `recurso_educativo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "recurso_educativo" DROP CONSTRAINT "recurso_educativo_id_calaboradores_fkey";

-- AlterTable
ALTER TABLE "recurso_educativo" DROP COLUMN "id_calaboradores",
ADD COLUMN     "id_colaboradores" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "recurso_educativo" ADD CONSTRAINT "recurso_educativo_id_colaboradores_fkey" FOREIGN KEY ("id_colaboradores") REFERENCES "colaboradores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
