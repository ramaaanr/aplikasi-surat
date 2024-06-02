'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'nomorSurat',
    header: 'No Surat',
  },
  {
    accessorKey: 'pengirimSurat',
    header: 'Pengirim',
  },
  {
    accessorKey: 'tanggalInput',
    header: 'Waktu',
  },
  {
    accessorKey: 'tempatSurat',
    header: 'Tempat',
  },
  {
    accessorKey: 'lampiranSurat',
    header: 'Lampiran',
  },
  {
    accessorKey: 'perihalSurat',
    header: 'Perihal',
  },
  {
    header: 'Aksi',
    cell: ({ row }) => {
      return (
        <>
          <Link href={`/surat-masuk/ubah/${row.original.id}`}>Ubah</Link>
          <Button variant={'destructive'}>Hapus</Button>
        </>
      );
    },
  },
];
