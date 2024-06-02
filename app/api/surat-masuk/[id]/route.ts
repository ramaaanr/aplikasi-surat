import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const req = await request.json();
    const { id, ...data } = req;

    const updatedSuratMasuk = await prisma.suratMasuk.update({
      where: { id: Number(params.id) },
      data,
    });

    return new Response(
      JSON.stringify({
        status: true,
        data: updatedSuratMasuk,
      }),
      { status: 200 },
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id; // 'a', 'b', or 'c'
  try {
    const id = params.id;
    const suratMasuk = await prisma.suratMasuk.findUnique({
      where: {
        id: Number(id), // Ensure `id` is a number
      },
    });
    if (suratMasuk) {
      return new NextResponse(JSON.stringify(suratMasuk), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return Response.json({
      status: false,
      message: 'id not found',
    });
  } catch (error: any) {
    return Response.json({
      status: false,
      message: error.message,
    });
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    await prisma.suratMasuk.delete({
      where: { id: parseInt(params.id) },
    });

    return new Response(
      JSON.stringify({
        status: true,
        message: 'Data deleted successfully',
      }),
      { status: 200 },
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
