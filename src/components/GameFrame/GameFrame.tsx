import "./GameFrame.scss";

const GameFrame: React.FC = ({ children }) => {
  return (
    <div className="game-frame">
      <h1 className="game-frame__heading">Castle Wars</h1>
      {children}
    </div>
  );
};

export default GameFrame;
