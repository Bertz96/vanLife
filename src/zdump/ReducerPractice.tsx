import { useState } from "react";
import useFormPractice from "../hooks/useFormPractice";

export default function ReducerPractice() {
  const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useFormPractice();

  return (
    <div className=" flex flex-col items-center justify-center  gap-6">
      <h1>Reducer</h1>
      <section className="flex flex-col gap-3">
        <h2 className=" self-center text-3xl font-bold">
          Experimentos reducer
        </h2>
        <p className=" self-center text-3xl font-bold">{count}</p>

        {/* CON STATE */}
        <button
          className=" rounded-md bg-slate-700 py-2 font-bold text-white"
          onClick={() => setCount((prev: number) => prev + 1)}
        >
          Suma
        </button>
        <button
          className=" rounded-md bg-slate-700 py-2 font-bold text-white"
          onClick={() => setCount((prev: number) => prev - 1)}
        >
          Resta
        </button>
      </section>

      <section className=" mt-6 w-80 rounded-lg bg-gray-500 p-6 text-lg font-bold">
        <p>
          Nombre: <span className="font-semibold text-white">{state.name}</span>
        </p>
        <p>
          Ubicación:{" "}
          <span className=" font-semibold text-white">{state.ubicacion}</span>
        </p>
        <p>
          Codigo postal:{" "}
          <span className=" font-semibold text-white">{state.postalCode}</span>
        </p>
      </section>

      <form action="" className="flex flex-col">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className=" rounded-md border py-2"
          placeholder="Inserte su nombre"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "nombre", inputName: e.target.value })
          }
        />

        <label htmlFor="ubicacion">Ubicación</label>
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          className=" rounded-md border py-2"
          placeholder="Inserte su ubicacion"
          value={state.ubicacion}
          onChange={(e) =>
            dispatch({ type: "ubicacion", direccion: e.target.value })
          }
        />

        <label htmlFor="postalCode">Codigo postal</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Codigo postal"
          className=" rounded-md border py-2"
          value={state.postalCode}
          onChange={(e) =>
            dispatch({ type: "postal", codigoPostal: e.target.value })
          }
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log({ ...state });
          }}
          className=" mt-4 rounded-md bg-red-700 py-2 text-white"
        >
          ENVIAR FORM
        </button>
      </form>
    </div>
  );
}
