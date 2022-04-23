import CloudOverlay from "../CloudOverlay/CloudOverlay";
import GameFrame from "../GameFrame/GameFrame";
import "./GameScreen.scss";

const GameScreen = () => {
  return (
    <GameFrame>
      <div className="game-screen">
        <div className="game-screen__play-area">
          <CloudOverlay />
        </div>
        <div className="game-screen__card-area"></div>
      </div>
    </GameFrame>
  );
};

export default GameScreen;
