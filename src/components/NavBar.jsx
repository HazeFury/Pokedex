import React from "react";
import "../App.jsx";

function NavBar({ name, index, setChosenPokemon }) {
  return (
    <div className="nav">
      <button onClick={() => setChosenPokemon(index)}>{name}</button>
    </div>
  );
}

export default NavBar;
