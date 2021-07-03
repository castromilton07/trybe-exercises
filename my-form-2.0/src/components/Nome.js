import React, { Component } from 'react';

class Nome extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
        Nome
        <input
          name="nome"
          type="text"
          value={ value }
          onChange={ handleChange }
          maxLength="40"
          required
        />
      </label>
    );
  }
}

export default Nome;