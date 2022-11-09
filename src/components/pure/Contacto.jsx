import React, { Component } from "react";
import PropTypes from "prop-types";

class Contacto extends Component {
  state = {
    miVariable: false,
    number: 1,
  };

  render() {
    return (
      <div>
        <div>
          <span>{this.props.nombre}</span>
        </div>
        <div>
          <span>{this.props.apellido}</span>
        </div>
        <div>
          <span>{this.props.email}</span>
        </div>
        {this.state.miVariable === false ? (
          <p>No está conectado</p>
        ) : (
          <p>Si está conectado</p>
        )}
        <div>
          <button
            onClick={() =>
              this.setState(
                { miVariable: !this.state.miVariable },
                this.setState({ number: this.state.number + 1 })
              )
            }
          >
            Cambiar
          </button>
        </div>
        <div>{this.state.number}</div>
      </div>
    );
  }
}

Contacto.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  conectado: PropTypes.bool,
};

export default Contacto;
