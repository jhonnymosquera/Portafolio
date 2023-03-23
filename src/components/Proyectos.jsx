import React from "react";
import useContexApp from "../Context/useContextApp";
import Contact_button from "./Contact_button";

export default function Proyectos() {
  let {} = useContexApp();

  return (
    <div className="proyectos">
      <header>
        <h2>Proyectos</h2>

        <Contact_button />
      </header>
    </div>
  );
}
