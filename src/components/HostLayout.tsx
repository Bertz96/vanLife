import { NavLink, Outlet } from "react-router-dom";

//text-purple-500

// border-y-2 border-black

export default function HostLayout() {
  return (
    <div className='min-h-screen'>
      <nav className="my-1 flex font-medium text-[#4D4D4D] justify-evenly lg:justify-normal gap-2 lg:gap-0 lg:*:px-5 *:py-1 ">
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
    </div>
  );
}
