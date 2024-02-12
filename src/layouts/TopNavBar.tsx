import logo from "../assets/Header.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch, CiLocationOn, CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { LuUser } from "react-icons/lu";
import { navContainer, hr, navSearchContainer, navLocationCont, navInput } from "../style/topNav";
import { flex } from "../style/recipe/flex";
import { css } from "../../styled-system/css";
import { marginRight, marginLeft } from "../style/global";

const TopNavBar = () => {
  return (
    <nav className={navContainer}>
      <div className={css({ marginRight: "auto" })}>
        <img src={logo} />
      </div>

      <div className={css(flex.raw({columnGap: 'md'}), navSearchContainer)}>
        <div
          className={css(flex.raw({columnGap: 'sm'}))}
        >
          <p className={css({color: 'secondary.100', fontWeight: 'bold', fontSize: '.8rem'})}>All Categories</p>
          <MdOutlineKeyboardArrowDown className={css({color: 'secondary.400'})}/>
        </div>

        <hr className={hr}></hr>

        <input placeholder="Search for items..." className={navInput}/>

        <CiSearch className={css(marginLeft, {color: 'secondary.400'})}/>
      </div>

      <div className={css(flex.raw({columnGap: 'sm'}), navLocationCont)}>
        <CiLocationOn className={css({color: 'secondary.700'})}/>
        <p className={css({fontSize: '.8rem', color: 'primary.100'})}>Your Location</p>
        <MdOutlineKeyboardArrowDown className={css({color: 'secondary.400'})}/>
      </div>

      <div className={flex({columnGap: 'md'})}>
        <div
          className={flex()}
        >
          <CiHeart />
          <p>1</p>
        </div>

        <div
          className={flex()}
        >
          <GrCart />
          <p>2</p>
        </div>

        <div
          className={flex()}
        >
          <LuUser />
          <p>3</p>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
