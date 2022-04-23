import PlayerNameProvider from "./context/GameContext";
import Routing from "./routes/Routing";
import "./styles/main.scss";

const App = () => {
  return (
    <PlayerNameProvider>
      <Routing />
    </PlayerNameProvider>
  );
};

export default App;
