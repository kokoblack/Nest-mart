import { sortContainer, sortIcon, sortIcon2, sortText } from "../../style/component/global/sortItems"
import { css } from "../../../styled-system/css"
import { flex } from "../../style/recipe/flex"
import { PiSquaresFour } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const ShowItems = () => {
  return (
    <section className={css(sortContainer, flex.raw({gap: "sm"}))}>
    <i className={css(sortIcon)}><PiSquaresFour/></i>
    <p className={css(sortText)}>Show<span>: 50</span></p>
    <i className={css(sortIcon2)}><MdOutlineKeyboardArrowDown/></i>
  </section>
  )
}

export default ShowItems