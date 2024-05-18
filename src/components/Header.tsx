import { Link, NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { TbLogout } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

function fakeLogOut() {
  localStorage.removeItem("loggedIn")
}

export default function Header() {

  const loggedUser = localStorage.getItem('loggedIn')

  const [open, setOpen] = useState(false)

  

  return (
    <header className="flex bg-[#161616]  lg:bg-transparent items-center justify-between relative z-20 lg:z-0 lg:p-1 lg:py-4 lg:mx-0">
      <Link to="/" className=" text-white lg:text-black py-3 lg:py-0 lg:rounded-none lg:bg-transparent px-4 lg:px-0 text-3xl lg:text-5xl font-black uppercase">
        #VanLife
      </Link>
      <button className='lg:hidden  mr-2 p-1 rounded-lg text-white' onClick={()=> {setOpen(prev => !prev)}}>
        <RxHamburgerMenu className='lg:hidden text-2xl' />
      </button>
        
        {/* MENU MOBILE */}

    
      
      {open &&  <div className='lg:hidden absolute w-full top-full bg-inherit'>
      <nav className="flex flex-col   mt-1 *:my-5 items-center w-screen lg:hidden font-medium text-[#4D4D4D]">
        <NavLink
          to="host"
          onClick={()=> {setOpen(prev => !prev)}}
          className={({ isActive }) =>
            isActive ? " font-bold text-white" : "hover:underline"
          }
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          onClick={()=> {setOpen(prev => !prev)}}
          className={({ isActive }) =>
            isActive ? " font-bold text-white" : "hover:underline"
          }
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          onClick={()=> {setOpen(prev => !prev)}}
          className={({ isActive }) =>
            isActive ? " font-bold text-white" : "hover:underline"
          }
        >
          Vans
        </NavLink>


        {
          loggedUser ? null :
          <NavLink
          to="login"
          onClick={()=> {setOpen(prev => !prev)}}
          className={({ isActive }) =>
            isActive ? " font-bold text-white" : "hover:underline"
          }
        >
          Log In
        </NavLink>
        }

          {
            loggedUser ? 
            <NavLink to='/' reloadDocument={true}>
              <button onClick={fakeLogOut} className=' rounded-lg  text-red-600  font-bold '>
                Log Out
                </button>
            </NavLink>
            : null
          }
      </nav>

      </div> }

      {/* MENU NORMAL */}

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

            <NavLink to='/' reloadDocument={true}>
              <button onClick={fakeLogOut} className=' rounded-lg  text-red-600  font-bold '>
                <TbLogout className=" text-2xl font-bold underline hover:text-[#161616]" />
                </button>
            </NavLink>
      </nav>
    </header>
  );
}

  