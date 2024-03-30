import { NavLink, Outlet } from "react-router-dom";

//text-purple-500

// border-y-2 border-black

export default function HostLayout() {
  return (
    <>
      <nav className="my-1 flex font-medium text-[#4D4D4D] *:px-5 *:py-1 ">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive ? "font-bold text-[#161616]" : "hover:underline"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive ? " font-bold text-[#161616]" : " hover:underline"
          }
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive ? " font-bold text-[#161616]" : " hover:underline"
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? " font-bold text-[#161616]" : " hover:underline"
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
