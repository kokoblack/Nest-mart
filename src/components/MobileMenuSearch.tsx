import { CiSearch } from "react-icons/ci";
import { flex } from "../style/recipe/flex";
import { css } from "../../styled-system/css";
import { button, container, input, searchIcon } from "../style/mobile-menu/mobileMenuSearch";

const MobileMenuSearch = () => {
  return (
    <div className={css(flex.raw({columnGap: 'sm', type: 'spaceBetween'}), container)}>
        <span className={searchIcon}><CiSearch/></span>
        <input placeholder="Search for items" className={input}/>
        <button className={button}>Search</button>
    </div>
  )
}

export default MobileMenuSearch