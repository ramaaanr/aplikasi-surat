'use client';

import SuratMasukForm from '@/components/surat-masuk-form';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const router = useRouter();
  const addSuratMasuk = async (data: any) => {
    try {
      const formattedData = {
        ...data,
        waktuSurat: new Date(data.waktuSurat).toISOString(),
      };
      console.log(data);
      const response = await fetch('/api/surat-keluar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        alert('tambah data sukses');
        router.push('/surat-keluar');
      } else {
        alert('tambah data gagal');
      }
    } catch (error) {
      console.error('Error adding surat masuk:', error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1>Surat Masuk</h1>
      <SuratMasukForm onSubmit={addSuratMasuk} />
    </div>
  );
};

export default Page;
