'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

interface SuratMasukFormProps {
  onSubmit: (data: any) => void;
}

const SuratMasukForm: React.FC<SuratMasukFormProps> = ({ onSubmit }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

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
    if (formData.username === 'admin' && formData.password === 'admin') {
      localStorage.setItem('auth', 'authicated');
      router.push('/');
    }
  };

  return (
    <div className="container w-96 mt-24">
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
            <Input
              required
              type={key === 'username' ? 'text' : 'password'}
              id={key}
              name={key}
              value={formData[key as keyof typeof formData]}
              onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        ))}
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SuratMasukForm;
