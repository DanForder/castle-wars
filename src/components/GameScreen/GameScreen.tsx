import CloudOverlay from "../CloudOverlay/CloudOverlay";
import "./GameScreen.scss";

const GameScreen = () => {
  return (
    <div className="game-screen">
      <div className="game-screen__play-area">
        <CloudOverlay />
      </div>
      <div className="game-screen__card-area"></div>
    </div>
  );
};

export default GameScreen;
