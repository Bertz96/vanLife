import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../utils/api";
import { requireAuth } from "../../utils/login";
import { Suspense } from 'react';
import { Loader, Van } from '../../types/vanType';


export async function loader({request} : Loader) {
  await requireAuth(request);
  return defer({listOfVans : getHostVans()});
}

type VanLoader = {
  listOfVans : Promise<Van[]>
}

export default function HostVans() {
  const dataPromise = useLoaderData() as VanLoader

  function renderHostVans(vans : Van[]){

    const listOfVans = vans.map((van) => (
      <Link to={`${van.id}`} key={van.id}>
        <div
          key={van.id}
          className=" text-black mb-6 flex mx-4 lg:mx-0  gap-4 rounded-lg bg-white p-5 lg:p-6"
        >
          <img
            src={van.imageUrl}
            alt="foteli van"
            className=" size-24 rounded-md"
          />
          <div className="flex flex-col justify-center">
            <h3 className=" font-bold">{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ))
    
    return (
      <section >
        {listOfVans}
      </section>
    )
  }

  return (
    <section >
      <h1 className="text-black my-5 mx-6 lg:my-9 lg:ml-7 text-4xl font-bold">Your listed vans</h1>
      <Suspense fallback={<h2>Loading host's vans...</h2>}>
        <Await resolve={dataPromise.listOfVans} >
          {renderHostVans}
        </Await>
      </Suspense>
    </section>
  );
}
