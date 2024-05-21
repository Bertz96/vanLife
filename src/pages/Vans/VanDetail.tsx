import { Link, LoaderFunctionArgs, useLoaderData, useLocation } from "react-router-dom";
import TypeBadge from "../../components/TypeBadge";
import { getVan } from "../../utils/api";
import { Van } from '../../types/vanType';


export async function loader({ params } : LoaderFunctionArgs ) {
  console.log(params.id)
  return getVan(params.id  as string);
}

export default function VanDetail() {
  const van = useLoaderData() as Van
  const ubicacion = useLocation();

  //with useLocation we use the ability of the browser to maintain some kind of state based on where you are at the app (like the previous URL)

  const search = ubicacion.state?.search || "";

  return (
    <section className='text-black pt-2 lg:pt-0 px-5 lg:px-0'>
      <Link
        to={`..${search}`}
        relative="path"
        className="w-fit mt-2 lg:mt-0 py-1 pl-4 pr-6 bg-[#161616] text-white rounded-full flex items-center text-lg font-semibold lg:hover:underline"
      >
        ← Back to all vans
      </Link>

      <div className="flex flex-col lg:mt-7 lg:flex-row">
        <img
          src={van.imageUrl}
          alt="fotito de la van"
          className="mt-5 lg:mt-0 mx-auto size-96 lg:mx-0  rounded-lg "
        />
        <div className=" flex flex-col gap-3 py-7 lg:mx-8">
          <TypeBadge badge={van.type}>{van.type}</TypeBadge>

          <h2 className=" text-4xl font-bold">{van.name}</h2>
          <h4>
            <span className=" text-lg font-bold">${van.price}</span>
            /day
          </h4>
          <p>{van.description}</p>
          <button className="  rounded-md lg:w-60 lg:mt-auto bg-orangeButton mt-4 py-2 font-bold   text-white">
            Rent this van
          </button>
        </div>
      </div>
    </section>
  );
}
