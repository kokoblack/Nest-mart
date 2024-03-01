import { useState, MutableRefObject, useEffect } from "react";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function useHandleDestroyAnimated<T extends HTMLElement>(
  ref: MutableRefObject<T | null>
): [boolean, (_: boolean) => void] {
  const [state, setState] = useState(false);

  // everytime the state or ref change, if state is true, we animate the destroy of the component.
  useEffect(() => {
    if (state) {
      handleDeletion(ref);
    }
  }, [ref, state]);

  function handleDeletion<T extends HTMLElement>(
    element: MutableRefObject<T | null>
  ) {
    const style = element?.current?.style;
    if (!style) return;
    sleep(1000).then(() => {
      style.transition = "all 0.5s";
      style.transform = "translateY(-50%)";
      style.opacity = "0";
      sleep(1000).then(() => {
        setState(false);
      });
    });
  }
  return [state, setState];
}

export default useHandleDestroyAnimated;
