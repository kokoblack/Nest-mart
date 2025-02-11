import { css } from "../../../../styled-system/css";

export const featuredContainer = css.raw({
  w: "100%",
  boxSizing: "border-box",
  // mb: "3rem",
});

export const featuredFirstSection = css.raw({
  mb: "2rem",
  position: "relative",
  fontSize: ["1.7rem", "1.7rem", "1.7rem", "1.9rem"],
  color: "secondary.100",

  "@media screen and (max-width: 992px)": {
    flexDirection: "column",
    alignItems: "start",
    gap: "1rem",
  },

  "@media screen and (max-width: 479px)": {
    mb: "1rem",

    "& > nav > ul": {
      overflowX: "scroll",
      justifyContent: "flex-start",
      scrollbar: "hidden",

      // _scrollbar: {
      //   w: "0px",
      // },
    },
  },
});

export const featureUlCont = css.raw({
  fontSize: ".9rem",
  fontWeight: "500",

  "@media screen and (max-width: 992px)": {
    
  },
});

export const featuredIconCont = css.raw({
  ml: "auto",

  "@media screen and (max-width: 992px)": {
    position: "absolute",
    bottom: "0",
    right: "0",
    ml: "0",
    display: "none"
  },
});

export const featuredIcon = css.raw({
  p: ".5rem",
  rounded: "100%",
  bg: "secondary.900",
  color: "secondary.700",
  fontSize: "1rem",
  cursor: "pointer",

  "@media screen and (max-width: 479px)": {
    p: ".15rem",
    fontSize: "1.3rem"
  },
});

export const featuredSecondSection = css.raw({
  mb: ["2rem"],
  overflowX: "scroll",
  // justifyContent: "flex-start",
  scrollbar: 'hidden'
});

export const featuredThirdSection = css.raw({
  overflowX: 'scroll',
  justifyContent: 'flex-start',
  scrollbar: 'hidden'
});
