// components/Header.tsx
'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <div className="w-full bg-white fixed flex  p-4">
      <div className="flex space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/surat-masuk">Surat Masuk</Link>
        <Link href="/surat-keluar">Surat Keluar</Link>
      </div>
    </div>
  );
};

export default Header;
