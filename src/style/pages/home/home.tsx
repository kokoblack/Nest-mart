import { css } from "../../../../styled-system/css";

export const homeCont = css.raw({
  boxSizing: "border-box",
  w: "100%",
});

export const style = css.raw({
  "@media screen and (max-width: 991px)": {
    display: "none",
  },
});

export const style2 = css.raw({
  overflowX: "scroll",
  justifyContent: "flex-start",
  scrollbar: "hidden",
  mb: "3rem",
});

export const style3 = css.raw({
  "@media screen and (min-width: 991px)": {
    display: "none",
  },
});
