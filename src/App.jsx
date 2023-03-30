import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  const [chosenPokemon, setChosenPokemon] = useState(0);
  return (
    <div>
      {pokemonList.map((creature, index) => (
        <NavBar
          key={creature.name}
          index={index}
          name={creature.name}
          setChosenPokemon={setChosenPokemon}
        />
      ))}

      <PokemonCard pokemon={pokemonList[chosenPokemon]} />
    </div>
  );
}

export default App;
