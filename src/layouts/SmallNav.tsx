import { PiSquaresFour } from "react-icons/pi";
import { LiaFireAltSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { smallNavOptions } from "../data/SmallNav";
import { css } from "../../styled-system/css";
import { flex } from "../style/recipe/flex";
import { container, supportContainer } from "../style/nav/smallNav";
import { button } from "../style/recipe/button";
import { marginLeft, menuActive, smallNavActive } from "../style/global";
import { useState } from "react";

const SmallNav = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className={css(flex.raw({ columnGap: "xlg" }), container)}>
      <button
        className={css(button.raw({ px: "md", py: "sm", fontSize: "md" }))}
      >
        <span>
          <PiSquaresFour />
        </span>
        <p>All Categories</p>
        <span>
          <MdOutlineKeyboardArrowDown />
        </span>
      </button>

      <div className={css(flex.raw({ columnGap: "xsm" }))}>
        <span className={css({ fontSize: "1.2rem", color: "primary.100" })}>
          <LiaFireAltSolid />
        </span>
        <p>Deal</p>
      </div>

      <div className={css(flex.raw({ columnGap: "lg" }))}>
        {smallNavOptions.map((option, index) => (
          <div
            key={index}
            className={css(
              flex.raw({ columnGap: "sm" }),
              { cursor: "pointer" },
              option.index === active ? smallNavActive : null
            )}
            onClick={() => setActive((prev) => (prev = option.index))}
          >
            <p>{option.name}</p>
            <span>{option.icon}</span>
          </div>
        ))}

        <p>Contact</p>
      </div>

      <div
        className={css(
          flex.raw({ columnGap: "md" }),
          marginLeft,
          supportContainer
        )}
      >
        <span className={css({ color: "secondary.100", fontSize: "1.8rem" })}>
          <TfiHeadphoneAlt />
        </span>
        <div>
          <p
            className={css({
              color: "primary.100",
              fontSize: "1.4rem",
              fontWeight: "bold",
              lineHeight: "1.3rem",
            })}
          >
            1900 - 888
          </p>
          <p
            className={css({
              color: "secondary.400",
              fontSize: ".7rem",
              fontWeight: "normal",
            })}
          >
            24/7 Support Center
          </p>
        </div>
      </div>
    </nav>
  );
};

export default SmallNav;
