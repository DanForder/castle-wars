import classNames from "classnames";
import { ReactFitty } from "react-fitty";
import { CardInfo } from "../../types/CardInfo";
import "./Card.scss";

type CardProps = CardInfo;

const Card: React.FC<CardProps> = ({
  id,
  displayName,
  costType,
  costAmount,
  affects,
  icon,
}) => {
  const getCostImage = (type: CardInfo["costType"]): string => {
    return {
      brick: "🧱",
      weapon: "⚔️",
      crystal: "🔮",
    }[type];
  };

  const className = classNames("card", `card--${costType}`);

  return (
    <div className={className}>
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
