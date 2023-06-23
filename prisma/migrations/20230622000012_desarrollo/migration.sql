-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "permiso_edicion" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id_inventario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo_inventario" INTEGER NOT NULL DEFAULT 0,
    "nombre_inventario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Objeto" (
    "id_objeto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "objeto" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "peso" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "id_inventario" INTEGER NOT NULL,
    CONSTRAINT "Objeto_id_inventario_fkey" FOREIGN KEY ("id_inventario") REFERENCES "Inventario" ("id_inventario") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Objeto_personalizado" (
    "id_objeto_p" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "objeto_p" TEXT NOT NULL,
    "reservacion" TEXT NOT NULL,
    "valor_p" TEXT NOT NULL,
    "precio_b" TEXT NOT NULL,
    "id_inventario" INTEGER NOT NULL,
    CONSTRAINT "Objeto_personalizado_id_inventario_fkey" FOREIGN KEY ("id_inventario") REFERENCES "Inventario" ("id_inventario") ON DELETE RESTRICT ON UPDATE CASCADE
);
