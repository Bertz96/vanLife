import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className=' m-auto w-2/3'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
