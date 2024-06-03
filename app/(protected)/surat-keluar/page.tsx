'use client';

import { PrismaClient } from '@prisma/client';
import { columns } from './column';
import { DataTable } from './data-table';
import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/surat-keluar');
      const result = await res.json();
      console.log(result);
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-semibold text-3xl">Surat Keluar</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
