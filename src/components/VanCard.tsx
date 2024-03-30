import { Link } from "react-router-dom";

type Van = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  type: string;
  description: string;
};

type Props = {
  van: Van;
};

export default function VanCard({ van }: Props) {
  return (
    <div>
      <Link to={`${van.id}`}>
        <img
          src={van.imageUrl}
          alt="foto van"
          className=" size-40 rounded-md"
        />
        <div>
          <h3 className=" font-bold">{van.name}</h3>
          <p className="py-2">
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i
          className={`${"bg-" + van.type} py- h-8 rounded-md  px-7 py-1 not-italic text-labels`}
        >
          {van.type}
        </i>
      </Link>
    </div>
  );
}
