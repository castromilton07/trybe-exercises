import React, { Component } from 'react';

class Resumo extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
            Resumo do Currículo
            <textarea
              name="resumo"
              value={ value }
              onChange={ handleChange }
              maxLength="1000"
              required
            />
          </label>
    );
  }
}

export default Resumo;