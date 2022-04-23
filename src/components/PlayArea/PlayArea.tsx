import { useState } from "react";
import { useGame } from "../../context/GameContext";
import DisplayName from "../DisplayName/DisplayName";
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
      </div>
      <div className="play-area__castle"></div>
      <div
        style={{ textAlign: "center", marginTop: "10px" }}
        className="play-area__deck"
      >
        <button style={{ color: "black" }} onClick={toggleTurn}>
          Toggle Turn
        </button>
      </div>
      <div className="play-area__castle"></div>
      <div className="play-area__resource">
        <DisplayName
          name={game.computer.name}
          isHighlighted={turn === "computer"}
        />
      </div>
    </div>
  );
};

export default PlayArea;
