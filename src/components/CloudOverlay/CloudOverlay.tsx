import cloud from "../../assets/cloud.png";
import "./CloudOverlay.scss";

const CloudOverlay = () => {
  const createCloud = () => {
    const cloudStyles = {};
    return (
      <img
        className="cloud-overlay__cloud"
        style={cloudStyles}
        src={cloud}
        alt="cloud"
      />
    );
  };

  return <div className="cloud-overlay">{createCloud()}</div>;
};

export default CloudOverlay;
