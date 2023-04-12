import React from "react";
import "../App.jsx";

 function NavBar({pokemonIndex , setPokemonIndex, getPokemon}){

  const handlePrev = () => {
    setPokemonIndex(pokemonIndex -1);
    getPokemon()
  };
  const handleNext = () => {
    setPokemonIndex(pokemonIndex +1);
    getPokemon()
  };

  return (
    <div className="nav">
    <button onClick={handlePrev }  disabled={pokemonIndex === 0 ? true : false}>Précedant</button>
    <button onClick={handleNext } disabled={pokemonIndex === 150 - 1 ? true : false}>Suivant</button>
 </div>
   );
}; 

export default NavBar;