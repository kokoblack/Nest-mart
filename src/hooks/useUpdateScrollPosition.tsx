import { useState, useEffect } from "react";

type ref = {
  ref: React.RefObject<HTMLDivElement>;
};

const useUpdateScrollPosition = ({ ref }: ref) => {
  const [divWidth, setDivWidth] = useState(0);
  const [divider, setDivider] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  const updateScrollPosition = () => {
    setCurrentPosition(() => ref.current?.scrollLeft!);
  };

  const handleForwardClick = () => {
    if (divWidth !== currentPosition) {
      ref.current!.scrollLeft = currentPosition + divider;
    }
  };

  const handleBackwardClick = () => {
    if (currentPosition !== 0) {
      ref.current!.scrollLeft = currentPosition - divider;
    }
  };

  useEffect(() => {
    const divWidth = ref.current?.scrollWidth!;
    setDivider(divWidth / 10);
    setDivWidth(divWidth);

    ref.current?.addEventListener("scroll", updateScrollPosition);

    return () => {
      ref.current?.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);
  return [handleBackwardClick, handleForwardClick];
};

export default useUpdateScrollPosition;
