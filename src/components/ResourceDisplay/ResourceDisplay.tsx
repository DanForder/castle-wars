import { Resource } from "../../context/GameContext";
import "./ResourceDisplay.scss";

const ResourceDisplay: React.FC<Resource> = ({
  builder,
  brick,
  soldier,
  weapon,
  magic,
  crystal,
  castle,
  fence,
}) => {
  return (
    <div className="resource-display">
      <div className="resource-display__card resource-display__card--brick">
        <div className="resource-display__item">
          <p>Builders</p>
          <p>{builder}</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Bricks 🧱</p>
          <p>{brick}</p>
        </div>
      </div>
      <div className="resource-display__card resource-display__card--weapon">
        <div className="resource-display__item">
          <p>Soldiers</p>
          <p>{soldier}</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Weapons ⚔️</p>
          <p>{weapon}</p>
        </div>
      </div>
      <div className="resource-display__card resource-display__card--crystal">
        <div className="resource-display__item">
          <p>Magic</p>
          <p>{magic}</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Crystals 🔮</p>
          <p>{crystal}</p>
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
