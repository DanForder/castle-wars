import mockPlayerHand from "../../data/mockPlayerHand";
import Card from "../Card/Card";
import "./PlayerHand.scss";

const PlayerHand = () => {
  const cards = [...mockPlayerHand];

  return (
    <div className="player-hand">
      {cards.map(({ ...card }) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default PlayerHand;
