import { useState } from "react";
import { useGame } from "../../context/GameContext";
import { getBuildingHeight } from "../../utils/gameUtils";
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
        castleHeight={getBuildingHeight(game.player.resource.castle)}
        fenceHeight={getBuildingHeight(game.player.resource.fence)}
      />
      <div
        style={{ textAlign: "center", marginTop: "10px" }}
        className="play-area__deck"
      >
        <button style={{ color: "black" }} onClick={toggleTurn}>
          Toggle Turn
        </button>
      </div>
      <Castle
        isFlipped
        color="blue"
        castleHeight={getBuildingHeight(game.computer.resource.castle)}
        fenceHeight={getBuildingHeight(game.computer.resource.fence)}
      />
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
