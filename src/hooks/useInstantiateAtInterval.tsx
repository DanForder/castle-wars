import { useEffect, useState } from "react";

const useInstantiateAtInterval = (
  initialTime: number,
  instantiate: () => any
) => {
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      instantiate();
      setTimer(initialTime);
    }
  }, [timer, instantiate, initialTime]);
};

export default useInstantiateAtInterval;
