import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { css } from "../../../styled-system/css";
import {
  sortContainer,
  sortIcon,
  sortText,
} from "../../style/component/global/sortItems";
import { flex } from "../../style/recipe/flex";
import { CiGrid42 } from "react-icons/ci";
import { useState } from "react";
import { TbLayoutList } from "react-icons/tb";

const DisplayType = () => {
  const [state, setState] = useState(false);
  return (
    <div onClick={() => setState((prevState) => !prevState)}>
      <section className={css(sortContainer, flex.raw({ gap: "sm" }))}>
        <i className={css(sortIcon)}>{state ? <TbLayoutList /> : <CiGrid42 />}</i>
        <p className={css(sortText)}>{state ? "List" : "Grid"}</p>
      </section>
    </div>
  );
};

export default DisplayType;
