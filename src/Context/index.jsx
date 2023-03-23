import { Context } from "./Context";
import perfil from "../data/perfil.json";
import habilidades from "../data/habilidades.json";
import proyectos from "../components/Proyectos";

function ContextProvider({ children }) {
  return (
    <Context.Provider value={{ perfil, habilidades, proyectos }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
