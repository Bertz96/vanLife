import useVan from "../../hooks/useVan";

export default function HostVanPhotos() {
  const { infoVan } = useVan();
  return (
    <section className=" text-black m-6 flex flex-wrap gap-2 pb-6">
      <img
        src={infoVan?.imageUrl}
        alt="foteli"
        className=" size-40    rounded-md"
      />
    </section>
  );
}
