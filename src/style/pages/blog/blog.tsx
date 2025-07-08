import { css } from "../../../../styled-system/css";
export const blogCont = css.raw({});

export const blogContentCont = css.raw({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  rowGap: "3rem",
  justifyContent: "space-between",
  w: "100%",
  gridColumnGap: "1.5rem",

  "@media screen and (max-width: 769px)": {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },

  "@media screen and (max-width: 563px)": {
    gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  }
});

export const blogSideMenu = css.raw({
  w: "fit-content",
  ml: "auto",
  rowGap: "3rem",

  "@media screen and (max-width: 1087px)" : {
    display: "none"
  }
});
