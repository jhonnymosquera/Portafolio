import React from "react";

function Redes() {
  return (
    <div className="redes">
      <div className="redes_nombre">
        <p>Jhonny Mosquera</p>
      </div>

      <div className="redes_icono">
        <a
          href="https://github.com/JhonnyMosquera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/jhonny-mosquera-a0a14111b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          href="https://twitter.com/jhonnymosquera_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default Redes;
