import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PokemonCard from "./components/PokemonCard"


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

  const [index,  setIndex] = useState(0); 
  
  return (
    <div>
      
     <PokemonCard pokemon ={pokemonList[index]} />
     {index > 0 ? <button onClick={() => setIndex(index - 1)}>Previous</button> : ""}
     {index < pokemonList.length -1 ? <button onClick={() => setIndex(index + 1)}>Next</button> : ""}
    </div>
  );
}

export default App

