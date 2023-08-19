import { DollarData } from '../utils/types';

export default function DollarCard({ data }: { data: DollarData }) {
  // Define a variable to hold the content for the <h2> element
  const h2Content =
    data.nombre === 'Contado con liquidación'
      ? 'CCL'
      : data.nombre === 'Solidario (Turista)'
      ? 'Turista'
      : data.nombre;

  return (
    <div className='border flex items-start justify-evenly flex-col rounded-lg p-4 px-6 shadow-md'>
      <h4 className='uppercase rounded-lg text-[#0f172a] font-normal text-sm'>
        {h2Content}
      </h4>
      <p className='italic mb-2 mt-6 text-2xl font-bold'>{`$${data.venta.toFixed(
        1
      )}`}</p>
    </div>
  );
}
