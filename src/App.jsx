import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import PokemonCard from "./components/PokemonCard";
//import NavBar from "./components/NavBar";

function App() {
  const [actualPokemon, setActualPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokebuildapi.fr/api/v1/pokemon/generation/1") //The first generation is equal to 151 Pokemons
      .then((response) => setActualPokemon(response.data));
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="HeaderTitle">The Pokedex</h1>
        <a className="headerLink" href="https://github.com/HazeFury">
          by HazeFury
        </a>
      </div>
      {actualPokemon.map((creature, index) => (
        <PokemonCard creature={actualPokemon[index]} index={index} />
      ))}
    </div>
  );
}
export default App;
