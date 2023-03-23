import React from "react";
import Redes from "../components/Redes";
import Habilidades from "../components/Habilidades";
import Contact_button from "../components/Contact_button";
import Proyectos from "../components/Proyectos";

function HomePage() {
  return (
    <main className="home_page">
      <header className="header">
        <Redes />

        <div className="photo">
          <img src="jhonny_photo.jpeg" alt="foto jhonny" />
        </div>

        <div className="descripcion">
          <h1>Junior Frontend</h1>

          <p>
            Bien benido a mi portafolio, soy estudiante de Analisis y Desarrollo
            de Software, con experiencia en proyectos de practica.
          </p>

          <Contact_button />
        </div>
      </header>

      <hr />

      <Habilidades />

      <hr />

      <Proyectos />
    </main>
  );
}

export default HomePage;
