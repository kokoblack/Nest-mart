import { css } from "../../../../styled-system/css";

export const searchContainer = css.raw({
  display: "flex",
  px: "1.2rem",
  py: "1.2rem",
  border: "1px solid #ECECEC",
  rounded: "10px",
  w: "100%",
});

export const searchInput = css.raw({
  color: "secondary.600",
  fontWeight: "500",
  fontSize: ".9rem",
  w: "90%",
  outline: "none",

  _placeholder: {
    color: "secondary.600",
  },
});

export const searchIcon = css.raw({
  ml: "auto",
  fontSize: "1.3rem",
});
