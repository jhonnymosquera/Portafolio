import React from "react";
import Redes from "../components/Redes";

function HomePage() {
  return (
    <main>
      <header className="header">
        <Redes />

        <div className="photo">
          <img src="jhonny_photo.jpeg" alt="" />
        </div>

        <div className="descripcion">
        <h1>Junior Frontend</h1>
        <p></p>
        </div>
      </header>
    </main>
  );
}

export default HomePage;
