-- CreateTable
CREATE TABLE "Calendario" (
    "id" SERIAL NOT NULL,
    "nombre_evento" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_biblioteca" INTEGER NOT NULL,

    CONSTRAINT "Calendario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "edicion_contenido" (
    "id" SERIAL NOT NULL,
    "fecha_edicion" TIMESTAMP(3) NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_biblioteca" INTEGER NOT NULL,

    CONSTRAINT "edicion_contenido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foros" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "foros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miembros" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_foro" INTEGER NOT NULL,

    CONSTRAINT "miembros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comentarios" (
    "id" SERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_foro" INTEGER NOT NULL,

    CONSTRAINT "comentarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calaboradores" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "calaboradores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recurso_educativo" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "ruta_archivo" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "id_calaboradores" INTEGER NOT NULL,

    CONSTRAINT "recurso_educativo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Calendario" ADD CONSTRAINT "Calendario_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calendario" ADD CONSTRAINT "Calendario_id_biblioteca_fkey" FOREIGN KEY ("id_biblioteca") REFERENCES "Biblioteca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "edicion_contenido" ADD CONSTRAINT "edicion_contenido_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "edicion_contenido" ADD CONSTRAINT "edicion_contenido_id_biblioteca_fkey" FOREIGN KEY ("id_biblioteca") REFERENCES "Biblioteca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "miembros" ADD CONSTRAINT "miembros_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "miembros" ADD CONSTRAINT "miembros_id_foro_fkey" FOREIGN KEY ("id_foro") REFERENCES "foros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_id_foro_fkey" FOREIGN KEY ("id_foro") REFERENCES "foros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recurso_educativo" ADD CONSTRAINT "recurso_educativo_id_calaboradores_fkey" FOREIGN KEY ("id_calaboradores") REFERENCES "calaboradores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
