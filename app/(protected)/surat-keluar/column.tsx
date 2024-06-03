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
    accessorKey: 'penerimaSurat',
    header: 'Penerima',
  },
  {
    accessorKey: 'tanggalInput',
    header: 'Waktu',
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
          <Link href={`/surat-keluar/ubah/${row.original.id}`}>Ubah</Link>
          <Link href={`/surat-keluar/delete/${row.original.id}`}>Hapus</Link>
        </>
      );
    },
  },
];
