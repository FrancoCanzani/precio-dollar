import { DollarData } from '../utils/types';
import convertDate from '../utils/functions/convertDate';

export default function DollarCard({ data }: { data: DollarData }) {
  const formattedDate = data.fechaActualizacion;

  return (
    <div className='bg-dollar-50 h-56 flex items-center justify-between flex-col rounded-lg px-8 py-6 m-4 shadow-md border border-dollar-50'>
      <h2 className='uppercase font-bold xl:text-2xl text-xl text-center mb-6'>{`Dólar ${data.nombre}`}</h2>
      <div className='flex space-x-10'>
        {data.compra && (
          <div className='flex flex-col items-center'>
            <span className='text-xl font-semibold'>Compra</span>
            <span className='italic'>{`$${data.compra}`}</span>
          </div>
        )}
        <div className='flex flex-col items-center mb-7'>
          <span className='text-xl font-semibold'>Venta</span>
          <span className='italic'>{`$${data.venta}`}</span>
        </div>
      </div>
      <span className='text-xs text-center'>{`Actualizado: ${convertDate(
        data.fechaActualizacion
      )}`}</span>
    </div>
  );
}
