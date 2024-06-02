import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const suratKeluar = await prisma.suratKeluar.findMany();
    if (suratKeluar) {
      return new NextResponse(JSON.stringify(suratKeluar), {
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
    const newsuratKeluar = await prisma.suratKeluar.create({
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
      data: newsuratKeluar,
    });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
}
