import React, { Component } from 'react';

class Endereco extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
        Endereço
        <input
          name="endereco"
          type="text"
          value={ value }
          onChange={ handleChange }
          maxLength="200"
          required
        />
      </label>
    );
  }
}

export default Endereco;