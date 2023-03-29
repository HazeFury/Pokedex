import React from "react";
import "../App.jsx";

 function NavBar({index , setIndex, pokemonList}){
  return (
   <div className='nav'>
        {index > 0 ? <button onClick={() => setIndex(index - 1)}>Previous</button> : ""}
        {index < pokemonList.length -1 ? <button onClick={() => setIndex(index + 1)}>Next</button> : ""}
   </div>
   );
}; 

export default NavBar