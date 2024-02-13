import logo from "../assets/Header.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { LuUser } from "react-icons/lu";
import {
  navContainer,
  hr,
  navSearchContainer,
  navLocationCont,
  navInput,
  navUserCont,
} from "../style/topNav";
import { flex } from "../style/recipe/flex";
import { css } from "../../styled-system/css";
import { marginRight, marginLeft } from "../style/global";
import TopNavIcon from "../components/TopNavIcon";

const TopNavBar = () => {
  return (
    <nav className={navContainer}>
      <div className={css({ marginRight: "auto" })}>
        <img src={logo} />
      </div>

      <div className={css(flex.raw({ columnGap: "md" }), navSearchContainer)}>
        <div className={css(flex.raw({ columnGap: "sm" }))}>
          <p
            className={css({
              color: "secondary.100",
              fontWeight: "bold",
              fontSize: ".8rem",
            })}
          >
            All Categories
          </p>
          <MdOutlineKeyboardArrowDown
            className={css({ color: "secondary.400" })}
          />
        </div>

        <hr className={hr}></hr>

        <input placeholder="Search for items..." className={navInput} />

        <CiSearch className={css(marginLeft, { color: "secondary.400" })} />
      </div>

      <div className={css(flex.raw({ columnGap: "sm" }), navLocationCont)}>
        <CiLocationOn className={css({ color: "secondary.700" })} />
        <p className={css({ fontSize: ".8rem", color: "primary.100" })}>
          Your Location
        </p>
        <MdOutlineKeyboardArrowDown
          className={css({ color: "secondary.400" })}
        />
      </div>

      <div className={css(flex.raw({ columnGap: "md" }), navUserCont)}>
        <TopNavIcon icon={<FaRegHeart />} count="5" name="Wishlist" />
        <TopNavIcon icon={<GrCart />} count="5" name="Cart" />

        <div className={css(flex.raw({columnGap: "xsm" }))}>
          <div className={css({ fontSize: "1.2rem" })}>
            <LuUser />
          </div>
          <p
            className={css({
              color: "secondary.400",
              fontSize: ".8rem",
              position: 'relative',
              top: '.2rem',
              p: "0",
            })}
          >
            Account
          </p>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
