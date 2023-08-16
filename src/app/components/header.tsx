import News from './news';

export default async function Header() {
  return (
    <header
      className={`overflow-hidden bg-dollar-50 z-10 sticky top-0 w-full items-center transition-all duration-100 ease-in-out`}
    >
      <div className='backdrop-blur flex justify-between p-4 lg:px-8 xl:px-24 backdrop-filter'>
        <h1 className='text-xs italic'>
          <span className='uppercase not-italic text-4xl font-black'>Blue</span>{' '}
          Valor del Dólar Blue Hoy
        </h1>
      </div>
      <News />
    </header>
  );
}
