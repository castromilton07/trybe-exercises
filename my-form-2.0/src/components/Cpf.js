import React, { Component } from 'react';

class Cpf extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
        CPF
        <input
          name="cpf"
          type="text"
          value={ value }
          onChange={ handleChange }
          maxLength="11"
          required
        />
      </label>
    );
  }
}

export default Cpf;