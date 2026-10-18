import {
  showCont,
  sortContainer,
  sortIcon,
  sortIcon2,
  sortText,
} from "../../style/component/global/sortItems";
import { css } from "../../../styled-system/css";
import { flex } from "../../style/recipe/flex";
import { PiSquaresFour } from "react-icons/pi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useState } from "react";

type ShowItemsProps = {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
};

const ShowItems = ({ number, setNumber }: ShowItemsProps) => {
  const [show, setShow] = useState(false);
  const num = [10, 20, 30, 50];
  return (
    <section
      onClick={() => setShow((prev) => !prev)}
      className={css(sortContainer, flex.raw({ gap: "sm" }))}
    >
      <i className={css(sortIcon)}>
        <PiSquaresFour />
      </i>
      <p className={css(sortText)}>
        Show<span>: {number}</span>
      </p>
      {!show && (
        <i className={css(sortIcon2)}>
          <MdOutlineKeyboardArrowDown />
        </i>
      )}
      {show && (
        <i className={css(sortIcon2)}>
          <MdOutlineKeyboardArrowUp />
        </i>
      )}

      {show && (
        <div className={css(showCont)}>
          {num.map((data, i) => (
            <p onClick={() => setNumber(data)} key={i}>{data}</p>
          ))}
        </div>
      )}
    </section>
  );
};

export default ShowItems;
