import React from 'react';
import './Pokemon.css';
import data from './data'

class Pokemon extends React.Component {
  render() {
    const pokemonList = data;
    const pokemons = pokemonList.map((pokemon) => {
      const { id, name, type, averageWeight, image, moreInfo } = pokemon;
      const { value, measurementUnit} = averageWeight;
      return (
        <li key={ id }>
          <div>
            <div>
              <span>{ name }<br /></span>
              <span>{ type }<br /></span>
              <span>Average wight: { value.toFixed(1) } { measurementUnit }</span>
            </div>
            <img src={ image } alt={ moreInfo }/>
          </div>
        </li>
      );
    });

    return (
      <div className="Pokemon">
        <ul>
          { pokemons }
        </ul>
      </div>
    );
  };
}

export default Pokemon;
