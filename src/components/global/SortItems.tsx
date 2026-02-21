import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbSortDescending2 } from "react-icons/tb";
import { css } from "../../../styled-system/css";
import { sortContainer, sortIcon, sortIcon2, sortText } from "../../style/component/global/sortItems";
import { flex } from "../../style/recipe/flex";

const SortItems = () => {
  return (
    <section className={css(sortContainer, flex.raw({gap: "sm"}))}>
      <i className={css(sortIcon)}><TbSortDescending2/></i>
      <p className={css(sortText)}>Sort<span>: Featured</span></p>
      <i className={css(sortIcon2)}><MdOutlineKeyboardArrowDown/></i>
    </section>
  );
};

export default SortItems;
