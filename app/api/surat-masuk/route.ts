import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const suratMasuk = await prisma.suratMasuk.findMany();

    return new Response(
      JSON.stringify({
        status: true,
        data: suratMasuk,
      }),
      { status: 200 },
    );
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

    const suratMasuk = await prisma.suratMasuk.findMany({
      where: {
        nomorSurat: nomorSurat, // Ensure `id` is a number
      },
    });
    if (suratMasuk.length > 0) {
      return new Response(
        JSON.stringify({
          status: false,
          message: 'Nomor Surat Sudah ada',
          data: suratMasuk,
        }),
        { status: 400 },
      );
    }
    const newsuratMasuk = await prisma.suratMasuk.create({
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
      data: newsuratMasuk,
    });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
}
