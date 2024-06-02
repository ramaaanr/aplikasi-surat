import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
      return Response.json({
        status: true,
        data: suratMasuk,
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
