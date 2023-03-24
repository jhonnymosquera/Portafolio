import React from "react";
import useContexApp from "../Context/useContextApp";
import Contact_button from "./Contact_button";
import Picture from "./utils/Picture";

export default function Perfil() {
  let { perfil } = useContexApp();

  let { photo, tittle, description } = perfil;

  return (
    <div className="perfil">
      <div className="photo">
        <Picture img={photo} className={"photo_img"} />
      </div>

      <div className="descripcion">
        <h1>{tittle} </h1>

        <p>{description}</p>

        <Contact_button />
      </div>
    </div>
  );
}
