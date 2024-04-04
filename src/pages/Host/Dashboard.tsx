import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { requireAuth } from '../../utils/login';
import { getHostVans } from '../../utils/api';
import { Suspense } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { Van } from '../../types/vanType';


export async function loader({request} ){
  await requireAuth(request)
  return defer({ listOfVans : getHostVans()})
}


export default function Dashboard() {
  
  const vanData = useLoaderData()
  
  function renderListOfVans(vans: Van[] ){
    const listOfVans = vans.map((van) => (
      <Link to={`vans/${van.id}`} key={van.id}>
        <div
          key={van.id}
          className="mb-6 flex  gap-4 rounded-lg bg-white p-6"
        >
          <img
            src={van.imageUrl}
            alt="foteli van"
            className="size-16   rounded-md"
          />
          <div className="flex flex-col justify-center">
            <h3 className=" font-bold">{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ))

    return listOfVans
  }


  return (
    <div className='flex flex-col'>
      <section className='bg-[#ffead0] px-6 py-9 flex justify-between items-center'>
    
        <div className=' flex flex-col gap-2'>
          <h1 className=' font-bold text-4xl'>Welcome!</h1>
          <p>Income last <span className='text-gray-600 font-semibold underline'> 30 days</span></p>
          <h2 className=' text-3xl font-bold'>$2,260</h2>
        </div>

        <p>Details</p>

      </section>

      <section className=' flex bg-[#ffddb2] justify-between items-center px-6 py-9'>
        <div className='text-3xl flex gap-2 items-center'>
          <h2 className=' font-bold'>Review score</h2>
          <BsStarFill className='text-xl text-[#ff8c38]' />
          <p className='text-2xl' >
            <span className='font-bold'>5.0</span>/5
          </p>
        </div>
  
        <p>Details</p>
  
      </section>
      

      <section>
        <div className=' flex justify-between px-6 py-8'>
        <h2 className=' text-2xl font-bold '>Your listed vans</h2>
        <p>View all</p>
        </div>
        <Suspense fallback={<h1>Cargando la data de las vans mi champ</h1>}>
          <Await resolve={vanData.listOfVans}>
            {renderListOfVans}
          </Await>
        </Suspense>
      </section>

    </div>
  );
}
