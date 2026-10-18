import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { TbSortDescending2 } from "react-icons/tb";
import { css } from "../../../styled-system/css";
import {
  showCont,
  sortContainer,
  sortIcon,
  sortIcon2,
  sortText,
} from "../../style/component/global/sortItems";
import { flex } from "../../style/recipe/flex";
import { useState } from "react";

type SortItemsProps = {
  type: string;
  cat: string[]
  setType: React.Dispatch<React.SetStateAction<string>>;
};


const SortItems = ({type, cat, setType}: SortItemsProps) => {
  const [show, setShow] = useState(false);
  return (
    <section
      onClick={() => setShow((prev) => !prev)}
      className={css(sortContainer, flex.raw({ gap: "sm" }))}
    >
      <i className={css(sortIcon)}>
        <TbSortDescending2 />
      </i>
      <p className={css(sortText)}>
        Sort<span>: {type}</span>
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
          {cat.map((data, i) => (
            <p onClick={() => setType(data)} key={i}>
              {data}
            </p>
          ))}
        </div>
      )}
    </section>
  );
};

export default SortItems;
