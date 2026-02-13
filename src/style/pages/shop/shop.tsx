import { css } from "../../../../styled-system/css";

export const shopContentCont = css.raw({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(208px, 208px))",
  rowGap: "3rem",
  justifyContent: "space-between",
  justifyItems: "center",
  gridColumnGap: ".8rem",
  gridRowGap: "2rem",

  "@media screen and (max-width: 680px)" : {
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 160px))",
  },

  "@media screen and (max-width: 540px)" : {
    display: "flex",
    flexWrap: "wrap",
    columnGap: ".5vw",
    justifyContent: "spaceBetwwen",
  }
});

export const shopSideMenu = css.raw({
  w: "fit-content",
  ml: "auto",
  rowGap: "3rem",

  "@media screen and (max-width: 1120px)" : {
    display: "none"
  }
});