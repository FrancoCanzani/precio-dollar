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
      <h1 className='uppercase text-5xl w-full text-center px-4 py-6 font-black'>
        Valor del{' '}
        <span className='bg-gradient-to-t from-dollar-400 to-teal-400 bg-clip-text text-transparent'>
          dólar
        </span>{' '}
        hoy
      </h1>
      <div className='flex items-center bg-dollar-100 border border-dollar-200 flex-col md:flex-row justify-center md:justify-between shadow-md rounded-md md:space-x-3 px-3 xl:px-6 py-2'>
        {dollarData.slice(0, 2).map((dollar: DollarData) => (
          <div
            key={dollar.casa}
            className='px-4 xl:px-8 py-1 rounded-md mb-4 md:mb-0 min-w-full md:min-w-fit justify-center md:justify-between items-center xl:space-x-8 flex transition duration-150'
          >
            <span className='uppercase font-bold lg:text-xl mr-3 w-full text-center'>{`Dólar ${dollar.casa}`}</span>
            <div className='flex space-x-5 lg:space-x-10 '>
              <div className='flex flex-col items-center px-2 py-1 rounded-md'>
                <span className='lg:text-xl font-semibold'>Compra</span>
                <span className='italic'>{`$${dollar.compra}`}</span>
              </div>
              <div className='flex flex-col items-center px-2 py-1 rounded-md'>
                <span className='lg:text-xl font-semibold'>Venta</span>
                <span className='italic'>{`$${dollar.venta}`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className='grid xl:px-24 py-4 grid-cols-1 gap-4 md:grid-cols-2'>
        {dollarData.slice(2).map((dollar: DollarData) => (
          <DollarCard key={dollar.venta} data={dollar} />
        ))}
      </section>
    </main>
  );
}
