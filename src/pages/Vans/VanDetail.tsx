import { Link, useLoaderData, useLocation } from "react-router-dom";
import TypeBadge from "../../components/TypeBadge";
import { getVan } from "../../utils/api";
import { Van } from '../../types/vanType';


// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params } ) {
  console.log(params.id)
  return getVan(params.id);
}

export default function VanDetail() {
  const van = useLoaderData() as Van
  const ubicacion = useLocation();

  //with useLocation we use the ability of the browser to maintain some kind of state based on where you are at the app (like the previous URL)

  const search = ubicacion.state?.search || "";

  return (
    <section>
      <Link
        to={`..${search}`}
        relative="path"
        className="text-xl font-semibold hover:underline"
      >
        ← Back to all vans
      </Link>

      <img
        src={van.imageUrl}
        alt="fotito de la van"
        className=" mt-8 size-80 rounded-lg "
      />
      <div className=" flex flex-col gap-3 py-7">
        <TypeBadge badge={van.type}>{van.type}</TypeBadge>

        <h2 className=" text-4xl font-bold">{van.name}</h2>
        <h4>
          <span className=" text-lg font-bold">${van.price}</span>
          /day
        </h4>
        <p>{van.description}</p>
        <button className="  rounded-md bg-orangeButton py-2 font-bold   text-white">
          Rent this van
        </button>
      </div>
    </section>
  );
}
