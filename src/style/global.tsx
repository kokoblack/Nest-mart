import { css } from "../../styled-system/css";
import { defineKeyframes } from "@pandacss/dev";

export const marginRight = css.raw({
  mr: "auto",
});

export const marginLeft = css.raw({
  ml: "auto",
});

export const show = css.raw({
  display: "block",
});

export const hide = css.raw({
  display: "none",
});

export const menuActive = css.raw({
  bg: "primary.400",
});

export const smallNavActive = css.raw({
  color: "primary.100",
});

export const paddingView = css.raw({
  px: ["1rem", "1rem", "1rem", "3rem"],
});

export const stickyNav = css.raw({
  position: "fixed",
  top: 0,
});

export const zigzagLiine = css.raw({
  "&::before": {
    height: "29px",
    width: "55px",
    background:
      "linear-gradient(135deg, white 35%, transparent 25%) -25px 0, linear-gradient(225deg, white 35%, transparent 25%) -25px 0, linear-gradient(315deg, white 35%, transparent 25%), linear-gradient(45deg, white 35%, transparent 25%)",
    backgroundColor: "#ffcc00",
    display: "block",
    content: "",
    backgroundSize: "16px 31px",
    backgroundRepeat: "repeat-x",
  },
});
