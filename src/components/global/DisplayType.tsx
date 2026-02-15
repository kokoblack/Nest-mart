import { css } from "../../../styled-system/css";
import {
  displayTypeCont,
  sortIcon,
  sortText,
} from "../../style/component/global/sortItems";
import { flex } from "../../style/recipe/flex";
import { CiGrid42 } from "react-icons/ci";
import { useState } from "react";
import { TbLayoutList } from "react-icons/tb";

type DisplayType = {
  setView: React.Dispatch<React.SetStateAction<boolean>>
}

const DisplayType = ({setView}: DisplayType) => {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState((prevState) => !prevState)
    setView(state)
  }
  return (
    <div onClick={handleClick}>
      <section className={css(displayTypeCont, flex.raw({ gap: "sm" }))}>
        <i className={css(sortIcon)}>{state ? <TbLayoutList /> : <CiGrid42 />}</i>
        <p className={css(sortText)}>{state ? "List" : "Grid"}</p>
      </section>
    </div>
  );
};

export default DisplayType;
