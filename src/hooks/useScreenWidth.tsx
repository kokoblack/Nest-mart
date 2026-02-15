import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [windowSize, setWindowSize] = useState(
    window.innerHeight);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize

};

export default useScreenWidth;
