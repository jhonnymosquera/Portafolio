import React from "react";
import useContexApp from "../Context/useContextApp";

export default function Proyectos() {
  let {} = useContexApp();

  return (
    <div className="proyectos">
      <header>
        <h2>Proyectos</h2>
      </header>
    </div>
  );
}
