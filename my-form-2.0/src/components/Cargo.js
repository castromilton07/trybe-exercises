import React, { Component } from 'react';

class Cargo extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
            Cargo
            <textarea
              name="cargo"
              value={ value }
              onChange={ handleChange }
              maxLength="40"
              required
            />
          </label>
    );
  }
}

export default Cargo;