import "../PokemonCard.css"


function PokemonCard({pokemon}) {

  return (
    <figure> 
      <img src= {pokemon.image} alt={pokemon.name}/> {/* use pokemon.sprite to lower the quality and speed up the loading*/ }
      <figcaption>{pokemon.name}</figcaption>
      <div className="info">
       <div className="ID">Pokedex ID : {pokemon.pokedexId}</div>
       <div className="HP">Points de Vie : {pokemon.stats.HP}</div>
       <div className="Atck">Attaque : {pokemon.stats.attack}</div>
       <div className="Type">Type : {pokemon.apiTypes[0].name} </div>


      </div>
    
    </figure>
  );
  };
  
 

  export default PokemonCard; 
  