import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET(request: Request) {}
export async function POST(request: Request) {
  try {
    const req = await request.json();
    const {
      nomorSurat,
      pengirimSurat,
      waktuSurat,
      lampiranSurat,
      perihalSurat,
      penerimaSurat,
      isiSurat,
      unitPenerbit,
      tempatSurat,
      namaMengesahkan,
      namaTembusan,
    } = req;
    const newSuratMasuk = await prisma.suratMasuk.create({
      data: {
        nomorSurat,
        pengirimSurat,
        waktuSurat,
        lampiranSurat,
        perihalSurat,
        penerimaSurat,
        isiSurat,
        unitPenerbit,
        tempatSurat,
        namaMengesahkan,
        namaTembusan,
      },
    });
    return Response.json({
      status: true,
      data: newSuratMasuk,
    });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
}
