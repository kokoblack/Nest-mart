import logo from "../assets/Header.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { LuUser } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import {
  navContainer,
  hr,
  navSearchContainer,
  navLocationCont,
  navInput,
  navUserCont,
  navUserText,
  navMenuIcon,
  navImage,
  mobileMenuView,
} from "../style/nav/topNav";
import { flex } from "../style/recipe/flex";
import { css } from "../../styled-system/css";
import { marginRight, marginLeft, hide, show } from "../style/global";
import TopNavIcon from "../components/TopNavIcon";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const TopNavBar = () => {
  const [view, setView] = useState(false);

  const handleMobileMenuView = () => {
    setView((prevState) => !prevState);
  };

  return (
    <nav className={navContainer}>
      <span
        className={css(flex.raw(), navMenuIcon, !view ? show : hide)}
        onClick={handleMobileMenuView}
      >
        <FiMenu />
      </span>

      <span
        className={css(flex.raw(), navMenuIcon, view ? show : hide)}
        onClick={handleMobileMenuView}
      >
        <IoMdClose />
      </span>

      <div className={css({ mr: ["0", "0", "0", "0", "auto"] })}>
        <img src={logo} className={navImage} />
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

        <CiSearch
          className={css(marginLeft, {
            color: "secondary.400",
            fontSize: "1.2rem",
          })}
        />
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

        <div className={css(flex.raw({ columnGap: "xsm" }))}>
          <span className={css({ fontSize: "1.2rem", hideBelow: "md" })}>
            <LuUser />
          </span>
          <p className={navUserText}>Account</p>
        </div>
      </div>

      <div className={css(mobileMenuView, view ? show : hide)}>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default TopNavBar;
