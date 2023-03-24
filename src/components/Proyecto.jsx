import React from "react";
import Picture from "./utils/Picture";

function Proyecto({ proyecto }) {
  return (
    <div className="proyectos_container_item">
      <div className="proyectos_container_item_img">
        <Picture img={proyecto.img} />
      </div>

      <div>
        <h3>{proyecto.title}</h3>
      </div>
    </div>
  );
}

export default Proyecto;
