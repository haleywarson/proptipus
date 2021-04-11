import React from "react";
import tempImg from "../../images/SadFish.jpeg"

function TentacleThree(props) {
  
  const card = props.hatedFishGiOhCard;

  return (
    <div className="tentacle-three">
      <span className="fish-name">{card.name}</span>

      <img
        alt="fish"
        className="fish-image"
        src={card.image}
      />

      <span className="fish-type">{card.type}</span>

      <span className="fish-description">
        {card.description}
      </span>

      <span className="fish-attack">{card.attack}</span>
    </div>
  );
}

export default TentacleThree;
