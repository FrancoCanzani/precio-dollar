import DollarCard from './components/dollarCard';
import { DollarData } from './utils/types';
import Header from './components/header';
import convertDate from './utils/functions/convertDate';

async function getDollarData() {
  const res = await fetch('https://dolar-api-argentina.vercel.app/v1/dolares', {
    next: { revalidate: 1800 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const dollarData = await getDollarData();

  return (
    <main className='min-h-screen flex flex-col items-center'>
      <Header />
      <div className='capitalize'>
        <h1 className='text-5xl text-[#0f172a] w-full text-center px-4 py-6 font-black'>
          Valor del{' '}
          <span className='bg-gradient-to-t from-dollar-400 to-teal-400 bg-clip-text text-transparent'>
            dólar
          </span>{' '}
          hoy
        </h1>
        <h2 className='max-w-[60ch] text-[#64748b] text-center text-lg leading-normal'>
          Descubrí los Tipos de Cambio para tomar decisiones financieras
          informadas
        </h2>
      </div>

      <section className='grid mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-evenly xl:px-24 py-4 gap-4'>
        {dollarData.map((dollar: DollarData) => (
          <DollarCard key={dollar.venta} data={dollar} />
        ))}
      </section>

      <section className='my-10'>
        <div className='border rounded-t-md border-border mt-2.5 flex-1 shadow-sm hover:shadow'>
          <table className='w-full overflow-auto'>
            <thead className='[&_tr]:border-b'>
              <tr className='text-[#64748b]'>
                <th className='h-12 px-4 text-left align-middle font-medium'>
                  Casa
                </th>
                <th className='h-12 px-4 text-left align-middle font-medium'>
                  Compra
                </th>
                <th className='h-12 px-4 text-left align-middle font-medium'>
                  Venta
                </th>
                <th className='h-12 hidden lg:table-cell lg:px-8 text-left align-middle font-medium'>
                  Fecha de Actualización
                </th>
              </tr>
            </thead>
            <tbody className='[&_tr:last-child]:border-0'>
              {dollarData.map((dollar: DollarData) => (
                <tr key={dollar.casa}>
                  <td className='border-b font-semibold truncate p-4 lg:pr-12 align-middle'>{`Dólar ${dollar.nombre}`}</td>
                  <td className='border-b truncate p-4 lg:pr-12 align-middle'>
                    {dollar.compra?.toFixed(1)}
                  </td>
                  <td className='border-b truncate lg:p-4 pr-12 align-middle'>
                    {dollar.venta.toFixed(1)}
                  </td>
                  <td className='border-b hidden lg:table-cell lg:pr-12 border-0 p-4 lg:px-8 align-middle'>
                    {convertDate(dollar.fechaActualizacion)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
