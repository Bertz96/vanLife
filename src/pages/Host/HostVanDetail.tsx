import {
  Link,
  LoaderFunctionArgs,
  NavLink,
  Outlet,
  useLoaderData,
} from "react-router-dom";
import { ContextType, Van } from "../../types/vanType";
import TypeBadge from "../../components/TypeBadge";
import { getVan } from "../../utils/api";
import { requireAuth } from "../../utils/login";

export async function loader({ params, request } : LoaderFunctionArgs ) {
  await requireAuth(request);

  return getVan(params.id as string);
}


export default function HostVanDetail() {

  const infoVan = useLoaderData() as Van

  return (
    <section className="py-2">
      <Link
        to=".."
        relative="path"
        className="w-fit py-1 pl-4 ml-4 pr-6 bg-[#161616] text-white rounded-full flex items-center text-lg font-semibold lg:hover:underline"
      >
        ← Back to all vans
      </Link>

      <div className="text-black rounded-lg bg-white">
        <div className="p-5 lg:p-0 mt-4 flex flex-col lg:flex-row">
          <img
            src={infoVan.imageUrl}
            alt="foto van"
            className=" lg:m-6 lg:size-52 rounded-md"
          />
          <div className=" lg:my-auto flex flex-col gap-2 lg:gap-4 pt-5 lg:py-5">
            <TypeBadge badge={infoVan.type}>{infoVan.type}</TypeBadge>
            <h2 className=" text-4xl font-bold">{infoVan.name}</h2>
            <p>
              <span className=" text-2xl font-bold">${infoVan.price}</span>
              /day
            </p>
          </div>
        </div>

        <nav className="flex font-medium text-[#4D4D4D] *:px-5 *:py-1">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "font-bold text-[#161616]" : "hover:underline"
            }
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "font-bold text-[#161616]" : "hover:underline"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive ? "font-bold text-[#161616]" : "hover:underline"
            }
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ infoVan } satisfies ContextType} />
      </div>
    </section>
  );
}
