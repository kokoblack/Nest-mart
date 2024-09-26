import React, { useEffect } from "react";

const useScreenWidth = (
  setState: React.Dispatch<React.SetStateAction<number>>
) => {
  useEffect(() => {
    const handleResize = () => {
      setState(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

export default useScreenWidth;
