import { Resource } from "../../context/GameContext";
import "./ResourceDisplay.scss";

const ResourceDisplay: React.FC<Resource> = ({
  builders,
  bricks,
  soldiers,
  weapons,
  magic,
  crystals,
  castle,
  fence,
}) => {
  return (
    <div className="resource-display">
      <div className="resource-display__card resource-display__card--bricks">
        <div className="resource-display__item">
          <p>Builders</p>
          <p>{builders}</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Bricks 🧱</p>
          <p>{bricks}</p>
        </div>
      </div>
      <div className="resource-display__card resource-display__card--weapons">
        <div className="resource-display__item">
          <p>Soldiers</p>
          <p>{soldiers}</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Weapons ⚔️</p>
          <p>{weapons}</p>
        </div>
      </div>
      <div className="resource-display__card resource-display__card--crystals">
        <div className="resource-display__item">
          <p>Magic</p>
          <p>{magic}</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Crystals 🔮</p>
          <p>{crystals}</p>
        </div>
      </div>
      <div className="resource-display__card resource-display__card--castle">
        <div className="resource-display__item">
          <p>Castle</p>
          <p>{castle}</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Fence</p>
          <p>{fence}</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceDisplay;
