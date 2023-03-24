import React from "react";
import Picture from "./utils/Picture";

function Proyecto({ proyecto }) {
  let { tittle, img, technologies, urls } = proyecto;

  return (
    <div className="proyectos_container_item">
      <div className="proyectos_container_item_img">
        <Picture img={proyecto.img} />
      </div>

      <div className="proyectos_container_item_desc">
        <h3>{proyecto.title}</h3>

        <div className="proyectos_container_item_desc_tec">
          {technologies.map((tec) => (
            <p>{tec}</p>
          ))}
        </div>

        <div className="proyectos_container_item_desc_tec">
          <a href={urls.live} target="_blank" rel="noopener noreferrer">
            Ver Proyecto
          </a>

          <a href={urls.repository} target="_blank" rel="noopener noreferrer">
            Ver Codigo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
