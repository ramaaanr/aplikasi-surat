/*
  Warnings:

  - You are about to drop the `surat_masuk` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `surat_masuk`;

-- CreateTable
CREATE TABLE `suratMasuk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomorSurat` VARCHAR(191) NOT NULL,
    `pengirimSurat` VARCHAR(191) NOT NULL,
    `waktuSurat` DATETIME(3) NOT NULL,
    `lampiranSurat` VARCHAR(191) NOT NULL,
    `perihalSurat` VARCHAR(191) NOT NULL,
    `penerimaSurat` VARCHAR(191) NOT NULL,
    `isiSurat` VARCHAR(191) NOT NULL,
    `unitPenerbit` VARCHAR(191) NOT NULL,
    `tempatSurat` VARCHAR(191) NOT NULL,
    `namaMengesahkan` VARCHAR(191) NOT NULL,
    `namaTembusan` VARCHAR(191) NOT NULL,
    `tanggalInput` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
