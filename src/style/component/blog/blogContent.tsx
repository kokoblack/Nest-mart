import { css } from "../../../../styled-system/css";

export const blogContentContainer = css.raw({
  fontWeight: "500",
  cursor: "pointer",
});

export const blogContentCat = css.raw({
  fontSize: ".85rem",
  color: "secondary.700",
  fontWeight: "700",
  mb: ".5rem",

  "@media screen and (max-width: 769px)": {
    fontSize: ".75rem",
  },
});

export const blogContententTitle = css.raw({
  fontSize: "1.5rem",
  color: "secondary.100",
  fontWeight: "700",
  mb: ".5rem",
  lineHeight: "1.8rem",

  "@media screen and (max-width: 769px)": {
    fontSize: "1.3rem",
    lineHeight: "1.5rem",
  },

  "@media screen and (max-width: 563px)": {
    fontSize: "1.1rem",
    lineHeight: "1.2rem",
  },
});

export const blogContentSortContainer = css.raw({
  fontSize: ".8rem",
  color: "secondary.400",
  font: "lato",
  // w: "fit-content",
  
  "& p": {
    w: "fit-content",
    p: 0,
    m: 0,
    flexGrow: 0
  },

  "@media screen and (max-width: 769px)": {
    fontSize: ".7rem",
  },
});

export const blogContentHide = css.raw({
  "@media screen and (max-width: 563px)": {
    // display: "none",
  },
});
