import "../PokemonCard.css";

function PokemonCard({ creature }) {
  const whatIsType = () => {
    if (creature.apiTypes[0].name.includes("Poison")) {
      return "isPoison";
    } else if (creature.apiTypes[0].name.includes("Feu")) {
      return "isFeu";
    } else if (creature.apiTypes[0].name.includes("Eau")) {
      return "isEau";
    } else if (creature.apiTypes[0].name.includes("Sol")) {
      return "isSol";
    } else if (creature.apiTypes[0].name.includes("Vol")) {
      return "isVol";
    } else if (creature.apiTypes[0].name.includes("Combat")) {
      return "isCombat";
    } else if (creature.apiTypes[0].name.includes("Plante")) {
      return "isPlante";
    } else if (creature.apiTypes[0].name.includes("Roche")) {
      return "isRoche";
    } else if (creature.apiTypes[0].name.includes("Insecte")) {
      return "isInsecte";
    } else if (creature.apiTypes[0].name.includes("Spectre")) {
      return "isSpectre";
    } else if (creature.apiTypes[0].name.includes("Acier")) {
      return "isAcier";
    } else if (creature.apiTypes[0].name.includes("Électrik")) {
      return "isÉlectrik";
    } else if (creature.apiTypes[0].name.includes("Psy")) {
      return "isPsy";
    } else if (creature.apiTypes[0].name.includes("Glace")) {
      return "isGlace";
    } else if (creature.apiTypes[0].name.includes("Dragon")) {
      return "isDragon";
    } else if (creature.apiTypes[0].name.includes("Ténèbres")) {
      return "isTénèbres";
    } else if (creature.apiTypes[0].name.includes("Fée")) {
      return "isFée";
    } else if (creature.apiTypes[0].name.includes("Normal")) {
      return "isNormal";
    }
  };

  return (
    <figure className={whatIsType()}>
      <img src={creature.image} alt={creature.name} />{" "}
      {/* use pokemon.sprite to lower the quality and speed up the loading*/}
      <figcaption>{creature.name}</figcaption>
      {/* <div className="info">    //Use this section if you want to show specs of each pokemon //
       <div className="ID">Pokedex ID : {creature.pokedexId}</div>
       <div className="HP">Points de Vie : {creature.stats.HP}</div>
       <div className="Atck">Attaque : {creature.stats.attack}</div>
       <div className="Type">Type : {creature.apiTypes[0].name} </div>
      </div> */}
    </figure>
  );
}

export default PokemonCard;
