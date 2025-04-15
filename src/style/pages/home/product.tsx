import { css } from "../../../../styled-system/css";

export const productContainer = css.raw({
  w: "100%",
  boxSizing: "border-box",
  mb: "3rem",
});

export const productSecondSection = css.raw({
  display: "grid",
  w: "100%",
  gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
  justifyItems: "center",
  gridColumnGap: "1rem",
  gridRowGap: "2rem",

  "@media screen and (max-width: 479px)": {
    display: "flex",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
});
