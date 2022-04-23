import "./ResourceDisplay.scss";

const ResourceDisplay = () => {
  return (
    <div className="resource-display">
      <div className="resource-display__card resource-display__card--bricks">
        <div className="resource-display__item">
          <p>Builders</p>
          <p>2</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Bricks</p>
          <p>5</p>
        </div>
      </div>
      <div className="resource-display__card resource-display__card--weapons">
        <div className="resource-display__item">
          <p>Soldiers</p>
          <p>2</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Weapons</p>
          <p>5</p>
        </div>
      </div>
      <div className="resource-display__card resource-display__card--crystals">
        <div className="resource-display__item">
          <p>Magic</p>
          <p>2</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Crystals</p>
          <p>5</p>
        </div>
      </div>
      <div className="resource-display__card resource-display__card--castle">
        <div className="resource-display__item">
          <p>Castle</p>
          <p>30</p>
        </div>
        <hr className="resource-display__separator" />
        <div className="resource-display__item">
          <p>Fence</p>
          <p>10</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceDisplay;
