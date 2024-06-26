'use client';

import { CircleArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Home() {
  const [totalSuratMasuk, setTotalSuratMasuk] = useState(0);
  const [totalSuratKeluar, setTotalSuratKeluar] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const responseSuratMasuk = await fetch('/api/surat-masuk');
      const resSM = await responseSuratMasuk.json();
      setTotalSuratMasuk(resSM.data.length);
      const responseSuratKeluar = await fetch('/api/surat-keluar');
      const resSK = await responseSuratKeluar.json();
      setTotalSuratKeluar(resSK.data.length);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-4xl">Dashboard</h1>
      <div className="card-container flex gap-x-4">
        <div className="card surat-masuk w-72  bg-blue-500 rounded-md">
          <div className="p-4">
            <div className="total font-bold text-3xl text-white">
              {totalSuratMasuk}
            </div>
            <div className="label text-white">Surat Masuk</div>
          </div>
          <Link
            href={'/surat-masuk'}
            className="footer flex justify-center rounded-b-md py-2 bg-blue-700"
          >
            <p className="mr-1 text-white text-xs">Menuju Surat Masuk</p>
            <CircleArrowRight size={16} color="#fff" />
          </Link>
        </div>
        <div className="card surat-masuk w-72  bg-green-500 rounded-md">
          <div className="p-4">
            <div className="total font-bold text-3xl text-white">
              {totalSuratKeluar}
            </div>
            <div className="label text-white">Surat Keluar</div>
          </div>
          <Link
            href={'/surat-keluar'}
            className="footer flex justify-center rounded-b-md py-2 bg-green-700"
          >
            <p className="mr-1 text-white text-xs">Menuju Surat Keluar</p>
            <CircleArrowRight size={16} color="#fff" />
          </Link>
        </div>
      </div>
    </div>
  );
}
