import { css } from "../../../../styled-system/css";

export const prodDetailCont = css.raw({
  position: "relative",
  w: "100%",
  boxSizing: "border-box",
});

export const prodDetailContent = css.raw({
  mt: "2rem",
  columnGap: "2rem",
  w: "100%",

  "@media screen and (max-width: 480px)": {
    mt: "1rem",
  },
});

export const prodDetailMenuButton = css.raw({
  display: "none",
  position: "fixed",
  bottom: "0",
  right: "0",
  w: "100%",
  border: "1px solid",
  borderBottomColor: "#ECECEC",
  borderTopColor: "#ECECEC",
  borderLeftColor: "white",
  borderRightColor: "white",
  py: ".5rem",
  bg: "white",
  zIndex: 10
,
  "@media screen and (max-width: 480px)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: ".6rem",
    px: "1rem",
  },
});

export const prodDetailRelatedProCont = css.raw({
  mt: "2rem",
  mb: "1rem",
  w: "100%",
  overflow: "hidden",

  "& > section > h3": {
    fontSize: ["1.55rem", "1.55rem", "1.55rem", "1.9rem", "1.9rem"],
    fontWeight: "bold",
    color: "secondary.100",
    fontFamily: "quicksand",
  },

  "& > section > hr": {
    w: "100px",
    border: "1px solid #BCE3C9",
    mt: "1rem",
  },
});

export const prodDetailRelatedProCard = css.raw({
  display: "flex",
  overflowX: "scroll",
  scrollBehavior: "smooth",
  justifyContent: "flex-start",
  alignItems: "stretch",
  columnGap: "1rem",
  scrollbar: "hidden",
  boxSizing: "border-box",
});
