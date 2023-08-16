import News from './news';

export default async function Header() {
  return (
    <header
      className={`overflow-hidden bg-dollar-50 z-10 sticky top-0 w-full items-center transition-all duration-100 ease-in-out`}
    >
      <div className='backdrop-blur flex justify-between p-4 lg:px-8 xl:px-24 backdrop-filter'>
        Hola
      </div>
      <News />
    </header>
  );
}
