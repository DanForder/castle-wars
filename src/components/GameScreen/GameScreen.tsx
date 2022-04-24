import CloudOverlay from "../CloudOverlay/CloudOverlay";
import PlayArea from "../PlayArea/PlayArea";
import PlayerHand from "../PlayerHand/PlayerHand";
import "./GameScreen.scss";

const GameScreen = () => {
  return (
    <div className="game-screen">
      <div className="game-screen__world">
        <CloudOverlay />
        <PlayArea />
      </div>
      <div className="game-screen__card-area">
        <PlayerHand />
      </div>
    </div>
  );
};

export default GameScreen;
