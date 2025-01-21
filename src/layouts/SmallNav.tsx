import { PiSquaresFour } from "react-icons/pi";
import { LiaFireAltSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { smallNavOptions } from "../data/SmallNav";
import { css } from "../../styled-system/css";
import { flex } from "../style/recipe/flex";
import { container } from "../style/layout/nav/smallNav";
import { button } from "../style/recipe/button";
import { smallNavActive, marginLeft } from "../style/global";
import { useState } from "react";
import Support from "../components/layouts/Support";

const SmallNav = () => {
  const [active, setActive] = useState(0);

  return (
    <header className={css(flex.raw({ columnGap: "xlg" }), container)}>
      <button
        className={css(button.raw({ px: "md", py: "sm", fontSize: "md" }), {
          cursor: "pointer",
        })}
      >
        <span>
          <PiSquaresFour />
        </span>
        <p>All Categories</p>
        <span>
          <MdOutlineKeyboardArrowDown />
        </span>
      </button>

      <div
        className={css(flex.raw({ columnGap: "xsm" }), { cursor: "pointer" })}
      >
        <span className={css({ fontSize: "1.2rem", color: "primary.100" })}>
          <LiaFireAltSolid />
        </span>
        <p>Deal</p>
      </div>

      <nav>
        <ul className={css(flex.raw({ columnGap: "lg" }))}>
          {smallNavOptions.map((option, index) => (
            <li
              key={index}
              className={css(
                flex.raw({ columnGap: "sm" }),
                { cursor: "pointer" },
                option.index === active ? smallNavActive : null
              )}
              onClick={() => setActive(() => (option.index))}
            >
              <p>{option.name}</p>
              <span>{option.icon}</span>
            </li>
          ))}

          <li className={css({ cursor: "pointer" })}>Contact</li>
        </ul>
      </nav>

      <div className={css(marginLeft)}><Support iconColor="secondary.100" phone="1900 - 888" time="24/7 Support Center" icon={<TfiHeadphoneAlt/>} /></div>
    </header>
  );
};

export default SmallNav;
