import { useState } from "react";
import { useGame } from "../../context/GameContext";
import Castle from "../Castle/Castle";
import DisplayName from "../DisplayName/DisplayName";
import ResourceDisplay from "../ResourceDisplay/ResourceDisplay";
import "./PlayArea.scss";

const PlayArea = () => {
  const { game } = useGame();
  const [turn, setTurn] = useState<"player" | "computer">("player");

  const toggleTurn = () => {
    setTurn((prev) => (prev === "player" ? "computer" : "player"));
  };

  const getCastleHeight = (castleHp: number): number => {
    const result = castleHp / 100;

    if (result > 1) {
      return 1;
    }

    if (result < 0) {
      return 0;
    }

    return result;
  };

  return (
    <div className="play-area">
      <div className="play-area__resource">
        <DisplayName
          name={game.player.name}
          isHighlighted={turn === "player"}
        />
        <ResourceDisplay {...game.player.resource} />
      </div>
      <Castle
        color="red"
        castleHeight={getCastleHeight(game.player.resource.castle)}
        fenceHeight={1}
      />
      <div
        style={{ textAlign: "center", marginTop: "10px" }}
        className="play-area__deck"
      >
        <button style={{ color: "black" }} onClick={toggleTurn}>
          Toggle Turn
        </button>
      </div>
      <Castle isFlipped color="blue" castleHeight={0.05} fenceHeight={0.02} />
      <div className="play-area__resource">
        <DisplayName
          name={game.computer.name}
          isHighlighted={turn === "computer"}
        />
        <ResourceDisplay {...game.computer.resource} />
      </div>
    </div>
  );
};

export default PlayArea;
