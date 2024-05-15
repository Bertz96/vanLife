import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

//  En main
//min-h-screen lg:min-h-min 

export default function Layout() {
  return (
    <div className='lg:flex lg:flex-col min-h-screen mx-auto lg:w-2/3 '>
      <Header />
      <main className=' min-h-screen lg:min-h-min lg:mb-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
  