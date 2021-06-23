import React from 'react';
import './Pokedex.css';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <span>Pokedéx</span>
        <Pokemon />
      </div>
    );
  };
}

export default Pokedex;
