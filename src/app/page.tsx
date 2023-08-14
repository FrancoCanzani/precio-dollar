import DollarCard from './components/dollarCard';
import { DollarData } from './utils/types';

async function getDollarData() {
  const res = await fetch('https://dolar-api-argentina.vercel.app/v1/dolares', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const dollarData = await getDollarData();

  return (
    <main className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 min-h-screen flex-col items-center justify-between px-24 py-14'>
      {dollarData.map((dollar: DollarData) => (
        <DollarCard key={dollar.venta} data={dollar} />
      ))}
    </main>
  );
}
