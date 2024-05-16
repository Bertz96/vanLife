import useVan from "../../hooks/useVan";

export default function HostVanPricing() {
  const { infoVan } = useVan();
  return (
    <section className="text-black m-6 flex flex-col gap-2 pb-6 text-xl">
      <p>
        <span className=" font-bold">${infoVan?.price}</span>/day
      </p>
    </section>
  );
}
