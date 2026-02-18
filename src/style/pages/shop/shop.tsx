import { css } from "../../../../styled-system/css";

export const shopProdCard = css.raw({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(208px, 208px))",
  rowGap: "3rem",
  justifyContent: "space-between",
  justifyItems: "center",
  gridColumnGap: ".8rem",
  gridRowGap: "2rem",
  mt: "2rem",

  "@media screen and (max-width: 680px)": { 
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 160px))",
  },

  "@media screen and (max-width: 540px)": {
    display: "flex",
    flexWrap: "wrap",
    columnGap: ".5vw",
    justifyContent: "spaceBetwwen",
  },
});

export const shopProdCardListView = css.raw({
  mt: "2rem",
});

export const shopSideMenu = css.raw({
  w: "fit-content",
  ml: "auto",
  rowGap: "3rem",

  "@media screen and (max-width: 1120px)": {
    display: "none",
  },
});

export const shopFilterSec = css.raw({
  "@media screen and (max-width: 700px)": {
    flexDirection: "column",
  },
});

export const shopSortSec = css.raw({
  "@media screen and (max-width: 280px)": {
    columnGap: ".3rem",
  },
});

export const shopSearchResultText = css.raw({
  color: "secondary.400",
  fontWeight: 500,
  mr: "auto",
  fontSize: ".9rem",
  w: "fit-content",

  "& > span": {
    color: "primary.100",
  },

  "@media screen and (max-width: 700px)": {
    m: 0,
    mb: "1rem",
    // display: "none"
  },

  "@media screen and (max-width: 280px)": {
    fontSize: ".75rem",
  },
});

export const shopHide = css.raw({
  "@media screen and (max-width: 340px)": {
    display: "none",
  },
});
export const shopShow = css.raw({
  "@media screen and (min-width: 341px)": {
    display: "none",
  },
});
