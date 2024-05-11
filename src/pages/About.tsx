import { Link } from 'react-router-dom';
import pictureAbout from '../assets/images/about.png'

export default function About() {
  return (
    <div>
      <img
        src={pictureAbout}
        alt="foto chico sobre van"
        className=" mx-auto my-5 rounded-md"
      />

      <div className="flex flex-col gap-3 px-12">
        <h1 className=" text-4xl font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className=" mb-4 rounded-md bg-[#FFCC8D] p-4 px-10">
          <h2 className="text-2xl font-bold">Your destination is waiting.</h2>
          <h2 className="text-2xl font-bold">Your van is ready.</h2>
          
          <Link to='/vans'>
            <button className=" text-white bg-black mb-3 ml-3 mt-6 rounded-md px-6 py-2 font-bold">
              Explore our vans
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
