import React, { Component } from 'react';

class Cargo extends Component {
  render() {
    const { value, handleChange, handleAlert } = this.props;
    return(
      <label>
            Cargo
            <textarea
              name="cargo"
              value={ value }
              onChange={ handleChange }
              onMouseEnter={ handleAlert }
              maxLength="40"
              required
            />
          </label>
    );
  }
}

export default Cargo;

// { alert('Preencha com cuidado esta informação.') }