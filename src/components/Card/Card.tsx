import classNames from "classnames";
import { ReactFitty } from "react-fitty";
import { Game, useGame } from "../../context/GameContext";
import { CardInfo } from "../../types/CardInfo";
import { logCard } from "../../utils/cardUtils";
import "./Card.scss";

type CardProps = CardInfo;

const Card: React.FC<CardProps> = (card) => {
  const { displayName, costType, costAmount, affects, icon } = card;
  const {
    affectPlayerResource,
    affectBuilding,
    togglePlayerTurn,
    getActivePlayer,
  } = useGame();

  const getCostImage = (type: CardInfo["costType"]): string => {
    return {
      brick: "🧱",
      weapon: "⚔️",
      crystal: "🔮",
    }[type];
  };

  const handleAffect = (
    targetPlayer: keyof Game = "player",
    targetResource: string,
    value: number
  ) => {
    if (targetResource === "castle" || targetResource === "fence") {
      affectBuilding(targetPlayer, targetResource, value);
    }
    if (
      targetResource === "builders" ||
      targetResource === "bricks" ||
      targetResource === "soldiers" ||
      targetResource === "weapons" ||
      targetResource === "magic" ||
      targetResource === "crystals"
    ) {
      affectPlayerResource(targetPlayer, targetResource, value);
    }
  };

  // TODO: check if can play card
  // TODO: affect enemy for relevant cards
  const handleClick = () => {
    const activePlayer = getActivePlayer();
    logCard(activePlayer, card);

    card.affects.forEach(({ target, value }) => {
      handleAffect(activePlayer, target, value);
    });

    togglePlayerTurn();
  };

  const className = classNames("card", `card--${costType}`);

  return (
    <div onClick={handleClick} className={className}>
      <span className="card__cost-type">{getCostImage(costType)}</span>
      <span className="card__cost-amount">{costAmount}</span>
      <span className="card__name">{displayName}</span>
      <span className="card__img">{icon}</span>
      <div className="card__affects">
        <ReactFitty minSize={10} maxSize={16}>
          {affects.map(({ target, value }) => (
            <span className="card__affect-item" key={target + value}>
              <span>{target}</span>
              <span>{value}</span>
            </span>
          ))}
        </ReactFitty>
      </div>
    </div>
  );
};

export default Card;
