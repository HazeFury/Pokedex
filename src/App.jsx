import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";


function App() {
  const [actualPokemon, setActualPokemon] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [show, setShow] = useState(false);
  console.log(pokemonIndex);

  const getPokemon = () => {
    axios
      .get("https://pokebuildapi.fr/api/v1/pokemon/limit/10")
      /* add "/limit/150" at the end of this URL to limit result to 150 pokemon.
      Remove it if you want the complete list of Pokemon (Warning : your app may be slower to load !).
      Don't forget put the same number in Navbar => disabled => pokemonIndex */
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setActualPokemon(data);
      });
  };

  useEffect(getPokemon, []);
  return (
    <div>
      <div className="header">
        <h1 className="HeaderTitle">The Pokedex</h1>
        <a className="headerLink" href="https://github.com/HazeFury">
          by HazeFury
        </a>
      </div>
      <button className="activate" onClick={() => setShow(!show)}>
        Show Pokedex
      </button>
      <div className="general">
      <div className="PokemonList">
        {actualPokemon && show && (
          <PokemonCard
            pokemon={actualPokemon[pokemonIndex]}
            pokemonIndex={pokemonIndex}
            setPokemonIndex={setPokemonIndex}
          />
        )}
      </div>
    </div>
      <div className="PokemonList">
      {actualPokemon.map((creature, index) => (
        <PokemonList creature={actualPokemon[index]} key={index} />
      ))}
     
      </div>
      <p className="footer">
        Réalisé par HazeFury, élève de la WildCodeSchool©2023
      </p>
    </div>
  );
}

export default App;
