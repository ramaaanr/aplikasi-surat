// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="w-56 fixed z-10 h-full bg-gray-800 text-white flex flex-col">
      <div className="flex flex-col p-4">
        <h2 className="text-xl font-semibold mb-6">Menu</h2>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/surat-masuk">Surat Masuk</Link>
        <Link href="/surat-keluar">Surat Keluar</Link>
        <p
          className="cursor-pointer"
          onClick={() => {
            localStorage.removeItem('auth');
            router.push('/login');
          }}
        >
          Log Out
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
