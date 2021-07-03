import React, { Component } from 'react';

class Tipo extends Component {
  render() {
    const { checked, handleChange } = this.props;
    return(
      <label>
            Tipo
            <br/>
            <label>
              Casa
              <input
                name="tipo"
                type="radio"
                value="Casa"
                checked={ checked }
                onChange={ handleChange }
              />
            </label>
            <label>
              Apartamento
              <input
                name="tipo"
                type="radio"
                value="Apartamento"
                checked={ checked }
                onChange={ handleChange }
              />
            </label>
          </label>
    );
  }
}

export default Tipo;