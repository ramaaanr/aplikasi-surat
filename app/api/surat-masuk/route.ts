import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const suratMasuk = await prisma.suratMasuk.findMany();
    if (suratMasuk) {
      return new NextResponse(JSON.stringify(suratMasuk), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error: any) {
    return Response.json({
      status: false,
      message: error.message,
    });
  }
}
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
