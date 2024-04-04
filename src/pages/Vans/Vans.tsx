import { Link, useLoaderData, useSearchParams, defer, Await } from "react-router-dom";
import { getVans } from "../../utils/api";
import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner';
import { Van } from '../../types/vanType';

export function loader() {
  return defer({ allVans : getVans()});
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vansData = useLoaderData();
    
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
        <div key={van.id}>
          <Link
            to={van.id}
            state={{ type: typeFilter, search: `?${searchParams.toString()}` }}
          >
            <img
              src={van.imageUrl}
              alt="foto van"
              className=" size-40 rounded-md"
            />
            <div>
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
          </Link>
        </div>
      ));

      return(
        <>
    <nav className="mt-4 flex gap-3">
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
  <div className="mb-8 mt-10 grid grid-cols-6 gap-11">{listOfVans}{listOfVans}{listOfVans}{listOfVans}{listOfVans}{listOfVans}</div></>
    ) 
}


  return (
    <div className=' px-9 py-4'>
      <h1 className=" text-4xl font-medium">Explore our van options</h1>
      
      <Suspense fallback={<div className=' flex justify-center'>
      <Oval width={60} color='#3B3B3B' secondaryColor='gray' strokeWidth={4}  />
      </div>}>
        <Await resolve={vansData.allVans}>
            {renderAllvans}
        </Await>
      </Suspense>
    </div>
  );
}
