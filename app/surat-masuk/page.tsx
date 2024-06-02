import { PrismaClient } from '@prisma/client';
import { columns } from './column';
import { DataTable } from './data-table';
const prisma = new PrismaClient();
async function getData() {
  try {
    // Mendapatkan semua data dari tabel surat_masuk
    const suratMasuk = await prisma.suratMasuk.findMany();
    // Menampilkan data
    console.log(suratMasuk);
    return suratMasuk;
  } catch (error) {
    console.error('Error getting data:', error);
    return [];
  } finally {
    // Menutup koneksi Prisma Client
    await prisma.$disconnect();
  }
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
