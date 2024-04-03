import { Link, NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

function fakeLogOut() {
  localStorage.removeItem("loggedIn")
}

export default function Header() {


  return (
    <header className=" flex items-center justify-between py-4">
      <Link to="/" className=" text-5xl font-black uppercase">
        #VanLife
      </Link>
      <nav className="flex gap-7 font-medium text-[#4D4D4D]">
        <NavLink
          to="host"
          className={({ isActive }) =>
            isActive ? " font-bold text-[#161616] underline" : "hover:underline"
          }
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? " font-bold text-[#161616] underline" : "hover:underline"
          }
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive ? " font-bold text-[#161616] underline" : "hover:underline"
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="register"
          className={({ isActive }) =>
            isActive ? " font-bold text-[#161616] underline" : "hover:underline"
          }
        >
          Register
        </NavLink>
        <NavLink
          to="login"
          className={({ isActive }) =>
            isActive ? " font-bold text-[#161616] underline" : "hover:underline"
          }
        >
          <VscAccount className=" text-2xl  font-bold underline  hover:text-[#161616]" />
        </NavLink>
        
            <Link to='/'>
              <button onClick={fakeLogOut} className=' rounded-lg  text-red-600  font-bold '>Log out</button>
            </Link>
      </nav>
    </header>
  );
}

