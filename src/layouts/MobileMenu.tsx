import { option } from "../data/MenuOptions";
import logo from "../assets/Header.png";
import { css } from "../../styled-system/css";
import {
  container,
  icon,
  image,
  text,
} from "../style/layout/mobile-menu/mobileMenu";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {

  return (
    <aside
      className={css(
        container,
      )}
    >
      <figure
        className={css({ borderBottom: "1px solid #dedfe2", mb: ".5rem" })}
      >
        <img src={logo} alt="logo" className={image} />
      </figure>

      <nav className={css({ w: "100%" })}>
        <ul>
          {option?.map((data, index) => (
            <li key={index} id="menu-link">
              <NavLink
                to={data.path}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <span className={icon}>{data.icon}</span>
                <p className={text}>{data.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileMenu;
