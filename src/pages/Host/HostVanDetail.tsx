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
    <section className="py-2 h-screen">
      <Link
        to=".."
        relative="path"
        className="text-xl font-semibold hover:underline"
      >
        ← Back to all vans
      </Link>

      <div className="rounded-lg bg-white">
        <div className=" mt-8 flex">
          <img
            src={infoVan.imageUrl}
            alt="foto van"
            className=" m-6 size-52 rounded-md"
          />
          <div className=" my-6 flex flex-col gap-4 py-5">
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
