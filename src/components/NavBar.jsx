import React from "react";
import "../App.jsx";

function NavBar({ index, setIndex, pokemon }) {
  const handleNext = () => {
    setIndex(index + 1);
  };
  const handlePrev = () => {
    setIndex(index - 1);
  };
  const isPikachu = () => {
    {
      pokemon[index].name === "pikachu" ? alert("pika pikachu !!!") : "";
    }
  };

  return (
    <div className="nav">
      <button
        onClick={handlePrev}
        disabled={index === 0 ? true : false}
        {...isPikachu()}
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={index === pokemon.length - 1 ? true : false}
        {...isPikachu()}
      >
        Next
      </button>
    </div>
  );
}

export default NavBar;