import { Link, NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { TbLogout } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";

function fakeLogOut() {
  localStorage.removeItem("loggedIn")
}

export default function Header() {


  return (
    <header className="flex bg-[#161616] lg:bg-transparent items-center justify-between lg:relative z-20 lg:z-0 p-1 lg:py-4 lg:mx-0">
      <Link to="/" className=" text-white lg:text-black py-3 lg:py-0 rounded-full lg:rounded-none lg:bg-transparent px-4 lg:pl-0 text-3xl lg:text-5xl font-black uppercase">
        #VanLife
      </Link>
      <button className='lg:hidden  mr-2 p-1 rounded-lg text-white'>
        <RxHamburgerMenu className='lg:hidden text-2xl' />
      </button>
      <nav className="sm:flex hidden lg:gap-7 font-medium text-[#4D4D4D]">
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
          to="login"
          className={({ isActive }) =>
            isActive ? " font-bold text-[#161616] underline" : "hover:underline"
          }
        >
          <VscAccount className=" text-2xl  font-bold underline  hover:text-[#161616]" />
        </NavLink>

        {/* 
          recargar la pagina cuando se hace click en el boton
        */}

            <Link to='/' reloadDocument={true}>
              <button onClick={fakeLogOut} className=' rounded-lg  text-red-600  font-bold '>
                <TbLogout className=" text-2xl font-bold underline hover:text-[#161616]" />
                </button>
            </Link>
      </nav>
    </header>
  );
}

  