/*
  Warnings:

  - A unique constraint covering the columns `[nomorSurat]` on the table `suratKeluar` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nomorSurat]` on the table `suratMasuk` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `suratKeluar_nomorSurat_key` ON `suratKeluar`(`nomorSurat`);

-- CreateIndex
CREATE UNIQUE INDEX `suratMasuk_nomorSurat_key` ON `suratMasuk`(`nomorSurat`);
