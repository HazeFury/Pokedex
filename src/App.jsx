import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
  const [actualPokemon, setActualPokemon] = useState(null);
  const [pokemonIndex, setPokemonIndex] = useState(0);
  console.log(pokemonIndex);

  const getPokemon = () => {
    axios
      .get(
        "https://pokebuildapi.fr/api/v1/pokemon/limit/150") 
        /* add "/limit/150" at the end of this URL to limit result to 150 pokemon.
      Remove it if you want the complete list of Pokemon (Warning : your app may be slower to load !).
      Don't forget put the same number in Navbar => disabled => pokemonIndex */
      .then((response) => response.data)
      .then((data) => {
        console.log(data[pokemonIndex]);
        setActualPokemon(data[pokemonIndex]);
      });
  };

  useEffect(getPokemon, []);
  return (
    <div>
    <div className="container">
      
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        getPokemon={getPokemon}
      />
      {actualPokemon && <PokemonCard pokemon={actualPokemon} />}
    </div>
    
    <p className="footer">Réalisé par HazeFury, élève de la WildCodeSchool©2023</p>
    </div>
  );
}

export default App;
