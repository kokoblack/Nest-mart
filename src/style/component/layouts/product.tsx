import { css } from "../../../../styled-system/css";

export const productCont = css.raw({
  w: "20rem",
  px: "1.5rem",
  pt: ".5rem",
  pb: "1rem",
  boxShadow: "1px 1px 6px #ECECEC",
  rounded: "15px",
  border: "1px solid #F2F3F4",

  "& > section:first-child": {
    mt: "1.2rem",
  },
});