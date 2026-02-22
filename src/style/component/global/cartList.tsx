import { css } from "../../../../styled-system/css";

export const cartlistCont = css.raw({
  "& > h3": {
    fontSize: ["1.5rem", "1.5rem", "1.5rem", "1.9rem", "1.9rem"],
    color: "secondary.100",
    fontFamily: "quicksand",
  },

  "& > p": {
    fontSize: ".8rem",
    color: "secondary.400",
    fontFamily: "quicksand",
  },

  "& > p > span": {
    color: "primary.100",
  },

  "@media screen and (max-width: 768px)": {
    "& > p": {
      fontSize: ".7rem",
    },
  },
});
