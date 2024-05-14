import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/homeBg.png'

export default function Home() {
  //h-[80vh]
  return (
  <div className='grid h-screen lg:h-[80vh]  lg:my-1 relative'>
    <img className='h-full lg:rounded-md -z-20 brightness-50 absolute' src={backgroundImage} alt="fondo vanlife" />
    <div className='flex col-start-1 row-start-1 gap-8 flex-col items-center justify-center '>
        <h1 className=" text-4xl text-center lg:text-5xl font-bold  text-white">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-md px-4 text-center lg:text-lg font-medium text-white">
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
