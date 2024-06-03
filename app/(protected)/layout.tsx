'use client';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const auth = localStorage.getItem('auth');

  if (!auth) {
    router.push('/login');
  }
  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      router.push('/login');
    } else if (auth !== 'authicated') {
      router.push('/login');
    }
    setloading(false);
  }, []);

  if (loading) return <div>Loading ...</div>;

  return (
    <main className="flex h-auto w-full">
      <Sidebar />
      <div className="ml-56 main-container w-full">
        <Header />
        <div className="main-container mt-8 min-h-screen bg-gray-100">
          {children}
        </div>
      </div>
    </main>
  );
}
