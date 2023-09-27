-- CreateTable
CREATE TABLE "Libros" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "Libros_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Libros" ADD CONSTRAINT "Libros_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
