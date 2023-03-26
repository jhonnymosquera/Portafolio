import React, { Component } from 'react';

export default class Formulario extends Component {
  render() {
    return (
      <form
        className="form"
        target="_blank"
        action="https://formsubmit.co/jhonnymosquera16@gmail.com"
        method="POST"
      >
        <input type="text" placeholder="Nombre" name="name" />

        <input type="email" placeholder="Correo" name="email" />

        <textarea
          name="message"
          placeholder="Mensaje"
          cols="30"
          rows="5"
        ></textarea>

        <input type="submit" value="Enviar Mensaje" />
      </form>
    );
  }
}
