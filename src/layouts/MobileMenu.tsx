import React from "react";
import MobileMenuSearch from "../components/MobileMenuSearch";
import { option } from "../data/MenuOptions";
import logo from '../assets/Header.png'
import { css } from "../../styled-system/css";
import { container, icon, image, optionContainer, text } from "../style/mobile-menu/MobileMenu";
import { flex } from "../style/recipe/flex";

const MobileMenu = () => {
  return (
    <div className={css(container, flex.raw({vertical: 'vertical', rowGap: 'sm', type: 'startY'}))}>
      <img src={logo} alt="logo" className={image}/>
      <MobileMenuSearch />
      <ul className={css({w: '100%'})}>
        {option.map((option, index) => (
          <li key={index} className={css(flex.raw({type: 'startX', columnGap: 'sm'}), optionContainer)}>
            <span className={icon}>{option.icon}</span>
            <p className={text}>{option.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
