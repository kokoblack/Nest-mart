import { CiSearch } from "react-icons/ci";
import { flex } from "../../style/recipe/flex";
import { css } from "../../../styled-system/css";
import { container, input, searchIcon } from "../../style/layout/mobile-menu/mobileMenuSearch";
import { button } from "../../style/recipe/button";

const MobileMenuSearch = () => {
  return (
    <div className={css(flex.raw({columnGap: 'sm', type: 'spaceBetween'}), container)}>
        <span className={searchIcon}><CiSearch/></span>
        <input placeholder="Search for items" className={input}/>
        <button className={css(button.raw({radius: 'lg', fontSize: 'md'}), {px: '1.4rem', py: '.7rem', ml: 'auto'})}>Search</button>
    </div>
  )
}

export default MobileMenuSearch