import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const MoveRightOrLeft = () => {
  const [state, setState] = useState(true);
  const handleState = () => setState((prevState) => !prevState);
  return (
    <div onClick={handleState}>
      {state ? (
        <i>
          <FaArrowLeftLong />
        </i>
      ) : (
        <i>
          <FaArrowRightLong />
        </i>
      )}
    </div>
  );
};

export default MoveRightOrLeft;
