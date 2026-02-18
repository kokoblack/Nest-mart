import { css } from "../../../../styled-system/css";

export const relProductCardContainer = css.raw({
  w: ["13rem"],
  p: [".8rem"],
  rounded: "15px",
  bg: "secondary.500",
  border: "1px solid #ECECEC",
  fontSize: ".75rem",
  color: "secondary.700",
  position: "relative",
  cursor: "pointer",

  "@media screen and (max-width: 320px)": {
    w: "10rem",
  },
});