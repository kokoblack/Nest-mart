import { css } from "../../../../styled-system/css";

export const sortContainer = css.raw({
  display: "flex",
  px: ".8rem",
  py: ".8rem",
  border: "1px solid #ECECEC",
  rounded: "10px",
  fontSize: ".8rem",
  color: 'secondary.600',
  fontWeight: "500",
  w: "fit-content",
  cursor: "pointer",

  "@media screen and (max-width: 436px)": {
    fontSize: ".7rem",
    p: ".7rem"
  }
});

export const sortIcon = css.raw({
  fontSize: "1.2rem",

  "@media screen and (max-width: 436px)": {
    fontSize: "1rem",
  }
});