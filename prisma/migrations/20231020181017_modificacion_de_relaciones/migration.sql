-- CreateTable
CREATE TABLE "Intereses" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_recurso" INTEGER NOT NULL,

    CONSTRAINT "Intereses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Intereses" ADD CONSTRAINT "Intereses_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Intereses" ADD CONSTRAINT "Intereses_id_recurso_fkey" FOREIGN KEY ("id_recurso") REFERENCES "recurso_educativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
