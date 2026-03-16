import React from "react";
import { flex } from "../../style/recipe/flex";
import { css } from "../../../styled-system/css";
import { navIconCount, navIconText } from "../../style/layout/nav/topNavIcon";
import { Link } from "react-router-dom";

type TopNavIconProps = {
  icon: React.ReactNode;
  count: string;
  name: string;
  link: string
};

const TopNavIcon = ({ icon, count, name, link }: TopNavIconProps) => {
  return (
    <Link to={link} className={css(flex.raw({ columnGap: "xsm" }), { cursor: "pointer" })}>
      <div className={css({ position: "relative" })}>
        <div className={css({ fontSize: "1rem" })}>{icon}</div>
        <p className={navIconCount}>{count}</p>
      </div>
      <p className={navIconText}>{name}</p>
    </Link>
  );
};

export default TopNavIcon;
