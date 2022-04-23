import { useState } from "react";
import cloud from "../../assets/cloud.png";
import useInstantiateAtInterval from "../../hooks/useInstantiateAtInterval";
import { getRandomIntegerInRange } from "../../utils/commonFunctions";
import "./CloudOverlay.scss";

// TODO: remove clouds from start of array when they reach a length threshold
const CloudOverlay = () => {
  const [clouds, setClouds] = useState<JSX.Element[]>([]);

  const addCloud = () => {
    // TODO: generate uid for clouds instead of index
    const newCloud = createCloud(clouds.length);
    setClouds((prev) => [...prev, newCloud]);
  };

  useInstantiateAtInterval(30, addCloud);

  const generateRandomCloudStyles = () => {
    const [translate, rotate, width] = [
      getRandomIntegerInRange(0, 250),
      getRandomIntegerInRange(-12.5, 12.5),
      `${getRandomIntegerInRange(5, 12)}%`,
    ];
    const transform = `translate(0,${translate}%) rotate(${rotate}deg)`;

    return {
      transform,
      width,
    };
  };

  const createCloud = (key: number) => {
    const style = generateRandomCloudStyles();
    return (
      <img
        className="cloud-overlay__cloud"
        style={style}
        src={cloud}
        alt="cloud"
        key={key}
      />
    );
  };

  return <div className="cloud-overlay">{clouds}</div>;
};

export default CloudOverlay;
