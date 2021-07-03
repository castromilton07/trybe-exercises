import React, { Component } from 'react';

class Email extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
        Email
        <input
          name="email"
          type="text"
          value={ value }
          onChange={ handleChange }
          maxLength="50"
          required
        />
      </label>
    );
  }
}

export default Email;