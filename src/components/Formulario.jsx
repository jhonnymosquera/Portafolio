import React, { Component } from 'react';

export default class Formulario extends Component {
  render() {
    return (
      <form
        className="form"
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

        <input type="hidden" name="_next" value="https://jhonny-mosquera.netlify.app/"></input>
        <input type="hidden" name="_captcha" value="false"></input>
      </form>
    );
  }
}
