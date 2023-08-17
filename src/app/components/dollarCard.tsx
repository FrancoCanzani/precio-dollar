import { DollarData } from '../utils/types';

export default function DollarCard({ data }: { data: DollarData }) {
  return (
    <div
      className='h-52 bg-dollar-50 flex items-center justify-evenly flex-col rounded-lg m-2 p-6 shadow-md'
      style={{
        backgroundImage:
          'url(https://www.cypress.io/images/tweets/teal-card.svg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className='uppercase rounded-lg text-dollar-950 font-bold xl:text-2xl text-xl text-center'>{`Dólar ${data.nombre}`}</h2>
      <div className='flex space-x-10'>
        {data.compra && (
          <div className='flex flex-col items-center'>
            <span className='text-xl font-semibold'>Compra</span>
            <span className='italic'>{`$${data.compra}`}</span>
          </div>
        )}
        <div className='flex flex-col items-center'>
          <span className='text-xl font-semibold'>Venta</span>
          <span className='italic'>{`$${data.venta}`}</span>
        </div>
      </div>
    </div>
  );
}
