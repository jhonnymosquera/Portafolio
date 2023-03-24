import React, { Component } from "react";

export default class Formulario extends Component {
  render() {
    return (
      <form>
        <input type="text" name="nama" />

        <input type="email" name="email" />

        <textarea name="message" cols="30" rows="10"></textarea>
      </form>
    );
  }
}
