'use client';

import React, { useEffect, useState } from 'react';
import { Input } from './ui/input';

interface SuratMasukFormProps {
  onSubmit: (data: any) => void;
  id: string;
}

const SuratMasukForm: React.FC<SuratMasukFormProps> = ({ onSubmit, id }) => {
  const [formData, setFormData] = useState({
    nomorSurat: '',
    pengirimSurat: '',
    waktuSurat: '',
    lampiranSurat: '',
    perihalSurat: '',
    penerimaSurat: '',
    isiSurat: '',
    unitPenerbit: 'Instansi',
    tempatSurat: '',
    namaMengesahkan: 'Direktur',
    namaTembusan: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/surat-masuk/${id}`);

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        console.log(res);

        const { result } = await res.json();
        console.log(result);
        setFormData({
          nomorSurat: result.nomorSurat,
          pengirimSurat: result.pengirimSurat,
          waktuSurat: result.waktuSurat,
          lampiranSurat: result.lampiranSurat,
          perihalSurat: result.perihalSurat,
          penerimaSurat: result.penerimaSurat,
          isiSurat: result.isiSurat,
          unitPenerbit: result.unitPenerbit,
          tempatSurat: result.tempatSurat,
          namaMengesahkan: result.namaMengesahkan,
          namaTembusan: result.namaTembusan,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nomorSurat: '',
      pengirimSurat: '',
      waktuSurat: '',
      lampiranSurat: '',
      perihalSurat: '',
      penerimaSurat: '',
      isiSurat: '',
      unitPenerbit: 'Instansi',
      tempatSurat: '',
      namaMengesahkan: 'Direktur',
      namaTembusan: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div key={key} className="mb-4">
          <label
            htmlFor={key}
            className="block text-sm font-medium text-gray-700"
          >
            {key.charAt(0).toUpperCase() +
              key.slice(1).replace(/([A-Z])/g, ' $1')}
          </label>
          {key === 'isiSurat' ? (
            <textarea
              required
              id={key}
              name={key}
              value={formData[key as keyof typeof formData]}
              onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          ) : key === 'unitPenerbit' ? (
            <select
              required
              id={key}
              name={key}
              value={formData[key as keyof typeof formData]}
              onChange={handleChange}
              className="mt-1 block w-full h-10 shadow-sm sm:text-sm ring-gray-700 rounded-md"
            >
              <option value="Institusi">Institusi</option>
              <option value="Jurusan Teknik Sipil">Jurusan Teknik Sipil</option>
              <option value="Jurusan Teknik Mesin">Jurusan Teknik Mesin</option>
              <option value="Jurusan Teknik Elektro">
                Jurusan Teknik Elektro
              </option>
              <option value="Jurusan Akutansi">Jurusan Akutansi</option>
              <option value="Jurusan Administrasi Bisnis">
                Jurusan Administrasi Bisnis
              </option>
            </select>
          ) : key === 'namaMengesahkan' ? (
            <select
              required
              id={key}
              name={key}
              value={formData[key as keyof typeof formData]}
              onChange={handleChange}
              className="mt-1 block h-10 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
              <option value="Direktur">Direktur</option>
              <option value="Ketua Jurusan Teknik Sipil">
                Ketua Jurusan Teknik Sipil
              </option>
              <option value="Ketua Jurusan Teknik Mesin">
                Ketua Jurusan Teknik Mesin
              </option>
              <option value="Ketua Jurusan Teknik Elektro">
                Ketua Jurusan Teknik Elektro
              </option>
              <option value="Ketua Jurusan Akutansi">
                Ketua Jurusan Akutansi
              </option>
              <option value="Ketua Jurusan Administrasi Bisnis">
                Ketua Jurusan Administrasi Bisnis
              </option>
            </select>
          ) : (
            <Input
              required
              type={key === 'waktuSurat' ? 'datetime-local' : 'text'}
              id={key}
              name={key}
              value={formData[key as keyof typeof formData]}
              onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default SuratMasukForm;
