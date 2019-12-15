import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResizeChange = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight});
    };
    window.addEventListener("resize", handleResizeChange);

    return () => {
      window.removeEventListener("resize", handleResizeChange);
    };
  }, [windowSize, setWindowSize]);

  return windowSize;
};
