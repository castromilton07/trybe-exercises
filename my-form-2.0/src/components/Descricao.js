import React, { Component } from 'react';

class Descricao extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
            Descrição do cargo
            <input
              name="descricao"
              type="text"
              value={ value }
              onChange={ handleChange }
              maxLength="500"
              required
            />
          </label>
    );
  }
}

export default Descricao;