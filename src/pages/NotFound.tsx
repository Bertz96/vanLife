import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    //revisar el tema del centrado
    <div className=" flex flex-col gap-16  px-40 py-64">
      <h1 className=" text-3xl font-bold text-black">
        Sorry, the page you were looking for was not found
      </h1>

      <Link
        to="/"
        className=" rounded-md bg-black py-2 text-center text-xl font-bold  text-white"
      >
        Return to home
      </Link>
    </div>
  );
}
