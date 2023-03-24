import React from "react";
import Redes from "../components/Redes";
import Habilidades from "../components/Habilidades";
import Proyectos from "../components/Proyectos";
import Perfil from "../components/Perfil";

function HomePage() {
  return (
    <main className="home_page">
      <header className="header">
        <Redes />

        <Perfil />
      </header>

      <hr />

      <Habilidades />

      <hr />

      <Proyectos />
    </main>
  );
}

export default HomePage;
