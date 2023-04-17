import "../PokemonCard.css";

import { useEffect, useState } from "react";

function PokemonCard({ pokemon, setPokemonIndex, pokemonIndex }) {
  const handlePrev = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  
  
  return (
    <div className="container">
      <div className="nav">
        <button
          onClick={handlePrev}
          disabled={pokemonIndex === 0 ? true : false}
        >
          Précedant
        </button>
        <button
          onClick={handleNext}
          disabled={pokemonIndex === 10 - 1 ? true : false}
        >
          Suivant
        </button>
      </div>
      <figure className="PokemonCardFigure">
        <img src={pokemon.image} alt={pokemon.name} />{" "}
        {/* use pokemon.sprite to lower the quality and speed up the loading*/}
        <figcaption>{pokemon.name}</figcaption>
        <div className="info">
          <div className="ID">Pokedex ID : {pokemon.pokedexId}</div>
          <div className="HP">Points de Vie : {pokemon.stats.HP}</div>
          <div className="Atck">Attaque : {pokemon.stats.attack}</div>
          <div className="Type">Type : {pokemon.apiTypes[0].name} </div>
        </div>
      </figure>
    </div>
  );
}

export default PokemonCard;
