import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className='lg:flex lg:flex-col min-h-screen mx-auto lg:w-2/3 '>
      <Header />
      <main className=' lg:mb-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
