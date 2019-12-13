import { useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResizeChange);

    return () => {
      window.removeEventListener("resize", handleResizeChange);
    };
  }, [width, setWidth]);

  return width;
};
