import { CiSearch } from "react-icons/ci";
import { flex } from "../../style/recipe/flex";
import { css } from "../../../styled-system/css";
import { container, input, searchIcon } from "../../style/layout/mobile-menu/mobileMenuSearch";

const MobileMenuSearch = () => {
  return (
    <div className={css(flex.raw({columnGap: 'sm', type: 'spaceBetween'}), container)}>
        <input placeholder="Search for items" className={input}/>
        <span className={searchIcon}><CiSearch/></span>

    </div>
  )
}

export default MobileMenuSearch