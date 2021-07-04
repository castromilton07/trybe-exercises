import React, { Component } from 'react';

class Cidade extends Component {
  render() {
    const { value, handleChange, handleOnBlur } = this.props;
    return(
      <label>
      Cidade
      <input
        name="cidade"
        type="text"
        value={ value }
        onChange={ handleChange }
        onBlur={ handleOnBlur }
        maxLength="28"
        required
      />
    </label>
    );
  }
}

export default Cidade;