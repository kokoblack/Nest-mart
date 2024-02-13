import React from "react";
import { flex } from "../style/recipe/flex";
import { css } from "../../styled-system/css";

type TopNavIconProps = {
  icon: React.ReactNode;
  count: string;
  name: string;
};

const TopNavIcon = ({ icon, count, name }: TopNavIconProps) => {
  return (
    <div className={flex({ columnGap: "xsm" })}>
      <div className={css({ position: "relative" })}>
        <div className={css({ fontSize: "1rem" })}>{icon}</div>
        <p
          className={css({
            position: "absolute",
            top: "-.6rem",
            right: "-.6rem",
            rounded: "100%",
            bg: "primary.100",
            fontSize: ".5rem",
            px: ".35rem",
            py: ".1rem",
            color: "secondary.500",
            display: "flex",
          })}
        >
          {count}
        </p>
      </div>
      <p
        className={css({
          color: "secondary.400",
          fontSize: ".8rem",
          p: "0",
          position: "relative",
          top: ".2rem",
        })}
      >
        {name}
      </p>
    </div>
  );
};

export default TopNavIcon;
