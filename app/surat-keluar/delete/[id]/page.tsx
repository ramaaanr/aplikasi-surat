'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const deleteButton = async () => {
    try {
      const response = await fetch(`/api/surat-keluar/${params.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Redirect or refresh the page after successful deletion
        router.refresh();
        router.push('/surat-keluar');
      } else {
        console.error('Failed to delete data');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="rounded-lg p-4 border w-[400px] mt-4 border-gray-400 mx-auto">
      <h1>Hapus Data</h1>
      <div className="flex gap-x-4">
        <Button onClick={deleteButton} variant={'destructive'}>
          Ya
        </Button>
        <Button onClick={() => router.push('/surat-keluar')}>Tidak</Button>
      </div>
    </div>
  );
};

export default Page;
