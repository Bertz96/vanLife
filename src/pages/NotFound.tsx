import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    //revisar el tema del centrado
    <div className=" flex flex-col pt-80 items-center  lg:px-40 lg:py-64">
      <h1 className="text-2xl px-8 lg:px-0 lg:text-3xl font-bold text-black">
        Sorry, the page you were looking for was not found
      </h1>

      <Link
        to="/"
        className=" rounded-md mt-9 bg-black px-16 py-2 text-center text-xl font-bold  text-white"
      >
        Return to home
      </Link>
    </div>
  );
}
