import DollarCard from './components/dollarCard';
import { DollarData } from './utils/types';
import Header from './components/header';

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
      <h1 className='uppercase text-6xl w-full text-center p-4 font-black'>
        Valor del{' '}
        <span className='bg-gradient-to-r from-dollar-500 to-indigo-500 bg-clip-text text-transparent'>
          dólar
        </span>{' '}
        hoy
      </h1>
      <section className='flex items-center gap-5 xl:px-24 py-4'>
        {dollarData.slice(0, 2).map((dollar: DollarData) => (
          <div
            key={dollar.casa}
            className='flex-col px-4 xl:px-11 py-2 justify-center items-center border border-solid rounded-[4px] flex font-medium transition duration-150 text-white bg-[#007780]'
          >
            <span className='uppercase font-bold lg:text-xl w-full mb-3 text-center'>{`Dólar ${dollar.casa}`}</span>
            <div className='flex space-x-5 lg:space-x-10 '>
              <div className='flex flex-col items-center'>
                <span className='lg:text-xl'>Compra</span>
                <span className='italic'>{`$${dollar.compra}`}</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='lg:text-xl'>Venta</span>
                <span className='italic'>{`$${dollar.venta}`}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className='grid xl:px-24 py-4 grid-cols-1 gap-4 md:grid-cols-2'>
        {dollarData.slice(2).map((dollar: DollarData) => (
          <DollarCard key={dollar.venta} data={dollar} />
        ))}
      </section>
    </main>
  );
}
