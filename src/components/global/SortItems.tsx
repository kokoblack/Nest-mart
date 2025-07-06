import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbSortDescending2 } from "react-icons/tb";
import { css } from "../../../styled-system/css";
import { sortContainer, sortIcon } from "../../style/component/global/sortItems";
import { flex } from "../../style/recipe/flex";

const SortItems = () => {
  return (
    <section className={css(sortContainer, flex.raw({gap: "sm"}))}>
      <i className={css(sortIcon)}><TbSortDescending2/></i>
      <p>Sort: Featured</p>
      <i className={css(sortIcon)}><MdOutlineKeyboardArrowDown/></i>
    </section>
  );
};

export default SortItems;
