import classNames from "classnames";
import { ReactFitty } from "react-fitty";
import { useGame } from "../../context/GameContext";
import { CardInfo } from "../../types/CardInfo";
import { logCard } from "../../utils/cardUtils";
import "./Card.scss";

type CardProps = CardInfo;

const Card: React.FC<CardProps> = (card) => {
  const { id, displayName, costType, costAmount, affects, icon } = card;
  const { affectPlayerResource } = useGame();

  const getCostImage = (type: CardInfo["costType"]): string => {
    return {
      brick: "🧱",
      weapon: "⚔️",
      crystal: "🔮",
    }[type];
  };

  const handleAffect = ({
    target,
    value,
  }: {
    target: string;
    value: number;
  }) => {
    if (
      target === "builders" ||
      target === "bricks" ||
      target === "soldiers" ||
      target === "weapons" ||
      target === "magic" ||
      target === "crystals" ||
      target === "castle" ||
      target === "fence"
    ) {
      affectPlayerResource("player", target, value);
    }
  };

  const handleClick = () => {
    logCard("player", card);
    card.affects.forEach((affect) => {
      handleAffect(affect);
    });
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
