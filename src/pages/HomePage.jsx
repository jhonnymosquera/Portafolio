import React from "react";
import Redes from "../components/Redes";
import Habilidades from "../components/Habilidades";
import Proyectos from "../components/Proyectos";
import Perfil from "../components/Perfil";
import Contact from "../components/Contact";

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
      <Contact />

      <hr />

      <footer className="footer">
        <Redes />
      </footer>
    </main>
  );
}

export default HomePage;
