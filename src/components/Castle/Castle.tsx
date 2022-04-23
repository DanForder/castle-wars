import "./Castle.scss";
import castleBlue from "../../assets/castle-blue.png";
import castleRed from "../../assets/castle-red.png";
import fenceRed from "../../assets/fence-red.png";
import fenceBlue from "../../assets/fence-blue.png";
import classNames from "classnames";

type CastleProps = {
  color: "red" | "blue";
  isFlipped?: boolean;
  castleHeight: number;
  fenceHeight: number;
};

const Castle: React.FC<CastleProps> = ({
  color,
  isFlipped,
  castleHeight,
  fenceHeight,
}) => {
  const className = classNames("castle", {
    "castle--flipped": isFlipped,
  });

  const [castleImg, fenceImg] =
    color === "red" ? [castleRed, fenceRed] : [castleBlue, fenceBlue];

  const castleStyle = {
    transform: `translate(0,${100 - 100 * castleHeight}%)`,
  };

  const fenceStyle = {
    transform: `translate(0,${100 - 100 * fenceHeight}%) scale(4, 1)`,
  };

  return (
    <div className={className}>
      <img
        style={castleStyle}
        className="castle__castle-img"
        src={castleImg}
        alt="castle"
      />
      <img
        style={fenceStyle}
        className="castle__fence-img"
        src={fenceImg}
        alt="fence"
      />
    </div>
  );
};

export default Castle;
