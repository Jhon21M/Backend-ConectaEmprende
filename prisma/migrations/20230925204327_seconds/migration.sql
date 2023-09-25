-- CreateTable
CREATE TABLE "Biblioteca" (
    "id" SERIAL NOT NULL,
    "nombre_recurso" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "ruta_archivo" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Biblioteca_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Biblioteca" ADD CONSTRAINT "Biblioteca_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
