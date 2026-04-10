import { css } from "../../../../styled-system/css";

export const delProductCont = css.raw({
  color: "secondary.700",
  fontWeight: "500",
  fontSize: ".7rem",
  fontFamily: "quicksand",
  border: "1px solid #ECECEC",
  w: "fit-content",
  py: ".3rem",
  px: ".6rem",
  rounded: "5px",
  cursor: "pointer",

  "& > i": {
    "@media screen and (max-width: 320px)": {
      display: "none",
    },
  },
});
