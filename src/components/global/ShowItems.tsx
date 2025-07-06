import { sortContainer, sortIcon } from "../../style/component/global/sortItems"
import { css } from "../../../styled-system/css"
import { flex } from "../../style/recipe/flex"
import { PiSquaresFour } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const ShowItems = () => {
  return (
    <section className={css(sortContainer, flex.raw({gap: "sm"}))}>
    <i className={css(sortIcon)}><PiSquaresFour/></i>
    <p>Show: 50</p>
    <i className={css(sortIcon)}><MdOutlineKeyboardArrowDown/></i>
  </section>
  )
}

export default ShowItems