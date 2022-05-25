import classNames from "classnames";
import { ReactFitty } from "react-fitty";
import { useGame } from "../../context/GameContext";
import { CardInfo } from "../../types/CardInfo";
import { getCostImage } from "../../utils/cardUtils";
import "./Card.scss";

type CardProps = CardInfo;

const Card: React.FC<CardProps> = ({
  displayName,
  costType,
  costAmount,
  affects,
  icon,
}) => {
  const { togglePlayerTurn, getActivePlayer, affectResource, attemptPlayCard } =
    useGame();

  // TODO: affect enemy for relevant cards
  const handleClick = () => {
    const activePlayer = getActivePlayer();
    const canPlayCard = attemptPlayCard(activePlayer, costType, costAmount);

    // check if the player can afford to play this card
    if (!canPlayCard) return;

    //the player has now paid for the card so effects can be played
    affects.forEach(({ target, value }) => {
      affectResource(activePlayer, target, value);
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
