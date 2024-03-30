import { Link } from 'react-router-dom';

export default function Home() {
  return (
  <div className='grid h-[80vh] '>
    <div className='bg-vansHome col-start-1 row-start-1 h-full bg-center brightness-50 bg-no-repeat -z-10'></div>
    <div className='flex col-start-1 row-start-1 gap-8 flex-col items-center justify-center z-20 '>
        <h1 className="text-5xl font-bold  text-white">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-lg font-medium text-white">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <Link to='/vans' className=" rounded-md bg-orangeButton px-9 py-2 font-bold text-white ">
          Find your van
        </Link>
    </div>
  </div>
  );
}
