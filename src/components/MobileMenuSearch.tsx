import { CiSearch } from "react-icons/ci";
import { flex } from "../style/recipe/flex";
import { css } from "../../styled-system/css";
import { container, input, searchIcon } from "../style/mobile-menu/mobileMenuSearch";
import { button } from "../style/recipe/button";

const MobileMenuSearch = () => {
  return (
    <div className={css(flex.raw({columnGap: 'sm', type: 'spaceBetween'}), container)}>
        <span className={searchIcon}><CiSearch/></span>
        <input placeholder="Search for items" className={input}/>
        <button className={button({radius: 'lg', py: 'sm'})}>Search</button>
    </div>
  )
}

export default MobileMenuSearch