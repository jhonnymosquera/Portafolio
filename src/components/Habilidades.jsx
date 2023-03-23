import React from "react";
import useContexApp from "../Context/useContextApp";

function Habilidades() {
  let { habilidades } = useContexApp();

  return (
    <div className="habilidades">
      {habilidades.map((habilidad, i) => (
        <div key={i} className="habilidad">
          <p>{habilidad}</p>
        </div>
      ))}
    </div>
  );
}

export default Habilidades;
