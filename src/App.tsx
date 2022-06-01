import GameProvider from "./context/GameContext";
import Routing from "./routes/Routing";
import "./styles/main.scss";

const App = () => {
  return (
    <GameProvider>
      <Routing />
    </GameProvider>
  );
};

export default App;
