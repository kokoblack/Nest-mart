import React from "react";
import { css } from "../../styled-system/css";
import { flex } from "../style/recipe/flex";

type SupportProps = {
    phone: string
    time: string
    iconColor: string
    icon: React.ReactNode
}

const supportContainer = css.raw({
  "@media screen and (max-width: 1129px)": {
    display: "none",
  },
});

const Support = ({phone, time, icon, iconColor}: SupportProps) => {
  return (
    <div className={css(flex.raw({ columnGap: "md" }), supportContainer)}>
      <span className={css({ color: iconColor, fontSize: "1.8rem" })}>
        {icon}
      </span>
      <div className={css({textAlign: 'center'})}>
        <p
          className={css({
            color: "primary.100",
            fontSize: "1.4rem",
            fontWeight: "bold",
            lineHeight: "1.3rem",
          })}
        >
          {phone}
        </p>
        <p
          className={css({
            color: "secondary.400",
            fontSize: ".7rem",
            fontWeight: "normal",
          })}
        >
          {time}
        </p>
      </div>
    </div>
  );
};

export default Support;
