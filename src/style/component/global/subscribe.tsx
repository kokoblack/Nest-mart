import { css } from "../../../../styled-system/css";

export const container = css.raw({
  w: ["fit-content", "16rem", "16rem", "25rem"],
  bg: "secondary.500",
  rounded: "5rem",
  boxSizing: "border-box",

  "@media screen and (max-width: 479px)": {
    columnGap: ".5rem",
  },

    "@media screen and (max-width: 319px)": {
      w: "fit-content",
    },
});

export const icon = css({
  color: "secondary.600",
  ml: "1rem",
  fontSize: "1.5rem",

  "@media screen and (max-width: 767px)": {
    fontSize: "1.1rem",
  },

  "@media screen and (max-width: 319px)": {
    display: "none",
  },
});

export const input = css({
  fontFamily: "quicksand",
  fontSize: [".8rem", ".8rem", ".8rem", "1rem"],
  bg: "transparent",
  mr: "auto",
  w: ["6rem"],

  _focus: {
    outline: "none",
    border: "none",
  },

  _placeholder: {
    color: "secondary.600",
  },

  "@media screen and (max-width: 319px)": {
    ml: '.5rem'
  },
});

export const subscribeButton = css.raw({
  "@media screen and (max-width: 767px)": {
    px: "1.2rem",
    py: ".6rem",
    fontSize: ".8rem",
  },
});
