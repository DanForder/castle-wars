import { useState } from "react";
import Settings from "../Settings/Settings";
import "./GameFrame.scss";

const GameFrame: React.FC = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleShowSettings = () => {
    setShowSettings((prevState) => !prevState);
  };

  return (
    <div className="game-frame">
      {showSettings && <Settings closeSettings={toggleShowSettings} />}
      <div className="game-frame__heading">
        <h1>Castle Wars</h1>
        {showSettings || (
          <button
            className="game-frame__settings-button"
            onClick={toggleShowSettings}
          >
            ⚙️
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default GameFrame;
