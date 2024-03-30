// import { useOutletContext } from "react-router-dom";
import useVan from "../../hooks/useVan";

export default function HostVanInfo() {
  const { infoVan } = useVan();

  return (
    <section className=" m-6 flex flex-col gap-2 pb-6">
      <h4>
        <span className=" font-bold">Name: </span>
        {infoVan?.name}
      </h4>
      <p>
        <span className=" font-bold">Category: </span>
        {infoVan?.type}
      </p>
      <p>
        <span className=" font-bold">Description: </span>
        {infoVan?.description}
      </p>
      <p>
        <span className=" font-bold">Visibility: </span> Public
      </p>
    </section>
  );
}
