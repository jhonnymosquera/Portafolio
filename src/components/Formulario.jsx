import React, { Component } from "react";

export default class Formulario extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Nombre" name="nama" />

        <input type="email" placeholder="Correo" name="email" />

        <textarea
          name="message"
          placeholder="Mensaje"
          cols="30"
          rows="10"
        ></textarea>

        <input type="submit" value="Enviar" />
      </form>
    );
  }
}
