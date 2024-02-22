import { useState } from "react";
import MobileMenuSearch from "../components/MobileMenuSearch";
import { option } from "../data/MenuOptions";
import logo from "../assets/Header.png";
import { css } from "../../styled-system/css";
import {
  container,
  icon,
  image,
  optionContainer,
  text,
} from "../style/mobile-menu/MobileMenu";
import { flex } from "../style/recipe/flex";
import { menuActive } from "../style/global";

const MobileMenu = () => {
  const [active, setActive] = useState(0);

  return (
    <aside
      className={css(
        container,
        flex.raw({ vertical: "vertical", rowGap: "sm", type: "startY" })
      )}
    >
      <img src={logo} alt="logo" className={image} />
      <MobileMenuSearch />
      <nav className={css({ w: "100%" })}>
        <ul>
          {option?.map((data, index) => (
            <li
              key={index}
              className={css(
                flex.raw({ type: "startX", columnGap: "sm" }),
                optionContainer,
                data.index === active ? menuActive : null
              )}
              onClick={() => setActive((prev) => (prev = data.index))}
            >
              <span className={icon}>{data.icon}</span>
              <p className={text}>{data.name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileMenu;
