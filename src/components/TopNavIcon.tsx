import React from "react";
import { flex } from "../style/recipe/flex";
import { css } from "../../styled-system/css";
import { navIconCount, navIconText } from "../style/nav/topNavIcon";

type TopNavIconProps = {
  icon: React.ReactNode;
  count: string;
  name: string;
};

const TopNavIcon = ({ icon, count, name }: TopNavIconProps) => {
  return (
    <div className={css(flex.raw({ columnGap: "xsm" }), {cursor: 'pointer'})}>
      <div className={css({ position: "relative" })}>
        <div className={css({ fontSize: "1rem" })}>{icon}</div>
        <p
          className={navIconCount}
        >
          {count}
        </p>
      </div>
      <p
        className={navIconText}
      >
        {name}
      </p>
    </div>
  );
};

export default TopNavIcon;
