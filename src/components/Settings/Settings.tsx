import React from "react";
import { Game, useGame } from "../../context/GameContext";
import TextField from "../Fields/TextField/TextField";
import "./Settings.scss";

type SettingsProps = {
  closeSettings: () => void;
};

const Settings: React.FC<SettingsProps> = ({ closeSettings }) => {
  const { updatePlayerName } = useGame();

  const handleUpdateName = (
    event: React.ChangeEvent<HTMLInputElement>,
    player: keyof Game
  ) => {
    updatePlayerName(player, event.target.value);
  };

  return (
    <div className="settings-wrapper">
      <div className="settings">
        <button className="settings__button" onClick={closeSettings}>
          ❌
        </button>
        <h2>Settings</h2>
        <TextField
          id="player-name"
          label="Player Name"
          defaultValue={"Player"}
          onInput={(e) => handleUpdateName(e, "player")}
        />
        <TextField
          id="computer-name"
          label="Computer Name"
          defaultValue={"Computer"}
          onInput={(e) => handleUpdateName(e, "computer")}
        />
      </div>
    </div>
  );
};

export default Settings;
