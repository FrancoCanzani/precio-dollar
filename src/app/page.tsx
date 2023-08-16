import DollarCard from './components/dollarCard';
import { DollarData } from './utils/types';
import Header from './components/header';
import News from './components/news';

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
    <main className='min-h-screen flex flex-col items-center justify-between'>
      <Header />
      <h1 className='capitalize text-6xl w-full text-center p-6 text-dollar-950 font-black'>
        Valor del dólar hoy
      </h1>
      <section className='grid px-24 py-6 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {dollarData.map((dollar: DollarData) => (
          <DollarCard key={dollar.venta} data={dollar} />
        ))}
      </section>
    </main>
  );
}
