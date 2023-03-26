import React from 'react';
import useContexApp from '../Context/useContextApp';
import Contact_button from './Contact_button';
import Proyecto from './Proyecto';

export default function Proyectos() {
  let { proyectos } = useContexApp();

  return (
    <div className="proyectos">
      <header className="proyectos_header">
        <h2>Proyectos</h2>

        <Contact_button />
      </header>

      <div className="proyectos_container">
        {proyectos.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
}
