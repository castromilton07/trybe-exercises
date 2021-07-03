import React, { Component } from 'react';

class Cidade extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
      Cidade
      <input
        name="cidade"
        type="text"
        value={ value }
        onChange={ handleChange }
        maxLength="28"
        required
      />
    </label>
    );
  }
}

export default Cidade;