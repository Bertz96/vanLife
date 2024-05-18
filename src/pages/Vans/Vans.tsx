import { Link, useLoaderData, useSearchParams, defer, Await } from "react-router-dom";
import { getVans } from "../../utils/api";
import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner';
import { Van } from '../../types/vanType';

export function loader() {
  return defer({ allVans : getVans()});
}

type VanLoader = {
  allVans : Promise<Van[]>
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vansData = useLoaderData() as VanLoader
    
  const typeFilter = searchParams.get("type");

  function handleFilterChange(key: string, value: string | null) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  

  function renderAllvans(vans : Van[]){

      const displayedVans = typeFilter
        ? vans.filter((van) => van.type === typeFilter)
        : vans;

      const listOfVans = displayedVans.map((van: Van) => (
        <div className='bg-white text-black lg:bg-transparent p-6 rounded-lg lg:rounded-none lg:p-0' key={van.id}>
          <Link
            to={van.id}
            state={{ type: typeFilter, search: `?${searchParams.toString()}` }}
          >
            <img
              src={van.imageUrl}
              alt="foto van"
              className="size-80 lg:size-40 mx-auto rounded-md"
            />
            <div className='flex justify-between items-center mt-2 lg:flex-col lg:items-start'>
              <div className=''>
                <h3 className=" font-bold">{van.name}</h3>
                <p className="py-2">
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
              <i
                className={`${"bg-" + van.type} py- h-8 rounded-md  px-7 py-1 not-italic text-labels`}
                >
                {van.type}
              </i>
            </div>
          </Link>
        </div>
      ));

      return(
        <>
    <nav className="mt-4 grid grid-cols-3 lg:flex gap-3">
        <button
        onClick={() => handleFilterChange("type", "simple")}
        className={`rounded-md ${typeFilter === "simple" ? "bg-simple text-white" : "bg-orange-300"} px-4 py-1 font-semibold  hover:bg-simple`}
    >
      Simple
    </button>

    <button
        onClick={() => handleFilterChange("type", "luxury")}
        className={`rounded-md ${typeFilter === "luxury" ? "bg-luxury text-white" : "bg-orange-300"} px-4 py-1 font-semibold  hover:bg-luxury `}
    >
      Luxury
    </button>
    
    <button
        onClick={() => handleFilterChange("type", "rugged")}
        className={`rounded-md ${typeFilter === "rugged" ? "bg-rugged text-white" : "bg-orange-300"} px-4 py-1 font-semibold  hover:bg-rugged`}
    >
      Rugged
    </button>
    
    {typeFilter ? (
        <button
            onClick={() => handleFilterChange("type", null)}
            className="rounded-md bg-gray-200 px-4  py-1 font-bold text-black"
        >
            Clear
        </button>
    ) : null}
  </nav>
  <div className="mb-8 mt-6 lg:mt-10 grid lg:grid-cols-6 gap-6 lg:gap-11">{listOfVans}</div></>
    ) 
}


  return (
    <div className='text-black lg:px-0 px-4 py-4'>
      <h1 className="text-4xl font-medium">Explore our van options</h1>
      
      <Suspense fallback={<div className=' flex pt-40 justify-center'>
      <Oval width={60} color='#3B3B3B' secondaryColor='gray' strokeWidth={4}  />
      </div>}>
        <Await resolve={vansData.allVans}>
            {renderAllvans}
        </Await>
      </Suspense>
    </div>
  );
}
