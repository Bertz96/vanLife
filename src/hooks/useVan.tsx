import { useOutletContext } from "react-router-dom";
import { ContextType } from "../types/vanType";

export default function useVan() {
  return useOutletContext<ContextType>();
}
