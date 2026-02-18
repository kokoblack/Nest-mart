import { css } from "../../../../styled-system/css";

export const productContainer = css.raw({
  w: "100%",
  boxSizing: "border-box",
  mb: "3rem",
});

export const productSecondSection = css.raw({
  display: "grid",
  w: "100%",
  gridTemplateColumns: "repeat(auto-fill, minmax(208px, 208px))",
  justifyContent: "space-between",
  justifyItems: "center",
  gridColumnGap: "1rem",
  gridRowGap: "2rem",

  "@media screen and (max-width: 680px)": {
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 160px))",
  },

  "@media screen and (max-width: 540px)": {
    display: "flex",
    flexWrap: "wrap",
    columnGap: ".5vw",
    justifyContent: "spaceBetwwen",
  },

  "@media screen and (max-width: 480px)": {
    flexWrap: "nowrap",
    display: "flex",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    justifyContent: "flex-start",
    alignItems: "stretch",
    columnGap: "1rem",
    scrollbar: "hidden"
  },
});
