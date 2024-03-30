import { useReducer } from "react";

type Accion =
  | {
      type: "nombre";
      inputName: string;
    }
  | {
      type: "ubicacion";
      direccion: string;
    }
  | {
      type: "postal";
      codigoPostal: string;
    };

type Estado = {
  error: string;
  name: string;
  ubicacion: string;
  postalCode: string;
};

export default function useFormPractice() {
  const initialVal = {
    error: "",
    name: "",
    ubicacion: "",
    postalCode: "",
  };

  function reducer(state: Estado, action: Accion) {
    const { type } = action;

    switch (type) {
      //   case "suma": {
      //     return { ...state, count: state.count + 1 };
      //   }
      //   case "resta": {
      //     return { ...state, count: state.count - 1 };
      //   }
      case "nombre": {
        return { ...state, name: action.inputName };
      }
      case "ubicacion": {
        return { ...state, ubicacion: action.direccion };
      }
      case "postal": {
        return { ...state, postalCode: action.codigoPostal };
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialVal);

  return [state, dispatch];
}
