import { Game, useGame } from "../../context/GameContext";
import { getBuildingHeight } from "../../utils/gameUtils";
import Castle from "../Castle/Castle";
import DisplayName from "../DisplayName/DisplayName";
import ResourceDisplay from "../ResourceDisplay/ResourceDisplay";
import "./PlayArea.scss";

const PlayArea = () => {
  const { game, togglePlayerTurn } = useGame();

  const getPlayerResourceUI = (player: keyof Game) => (
    <div className="play-area__resource">
      <DisplayName
        name={game[player].name}
        isHighlighted={game[player].isActive}
      />
      <ResourceDisplay {...game[player].resource} />
    </div>
  );

  return (
    <div className="play-area">
      {getPlayerResourceUI("player")}
      <Castle
        color="red"
        castleHeight={getBuildingHeight(game.player.resource.castle)}
        fenceHeight={getBuildingHeight(game.player.resource.fence)}
      />
      <div className="play-area__deck">
        <button className="play-area__button" onClick={togglePlayerTurn}>
          Toggle Turn
        </button>
      </div>
      <Castle
        isFlipped
        color="blue"
        castleHeight={getBuildingHeight(game.computer.resource.castle)}
        fenceHeight={getBuildingHeight(game.computer.resource.fence)}
      />
      {getPlayerResourceUI("computer")}
    </div>
  );
};

export default PlayArea;
