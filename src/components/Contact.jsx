import React from "react";
import Formulario from "./Formulario";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact_desc">
        <h2>Contact</h2>

        <p>
          Me encantaría saber sobre tu proyecto y cómo podría ayudarte. Por
          favor, rellene el formulario y me pondré en contacto con usted lo
          antes posible.
        </p>
      </div>

      <Formulario />
    </div>
  );
}
