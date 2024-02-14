import React from "react";
import MobileMenuSearch from "./MobileMenuSearch";
import { option } from "../data/MenuOptions";
import logo from '../assets/Header.png'
import { css } from "../../styled-system/css";
import { container } from "../style/mobile-menu/MobileMenu";
import { flex } from "../style/recipe/flex";

const MobileMenu = () => {
  return (
    <div className={css(container, flex.raw({vertical: 'vertical', rowGap: 'md', type: 'startY'}))}>
      <img src={logo} alt="logo"/>
      <MobileMenuSearch />
      <div>
        {option.map((option) => (
          <div>
            <span>{option.icon}</span>
            <p>{option.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
