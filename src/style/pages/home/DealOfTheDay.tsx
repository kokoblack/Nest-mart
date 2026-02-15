import { css } from "../../../../styled-system/css";

export const DealOfTheDayFirstCont = css.raw({
  w: "100%",
  // flexWrap: "wrap",

  "& > h3": {
    fontSize: ["1.55rem", "1.55rem", "1.55rem", "1.9rem", "1.9rem"],
    fontWeight: "bold",
    color: "secondary.100",
    lineHeight: "2rem",
  },

  "& div": {
    fontSize: [".8rem", ".8rem", ".8rem", ".9rem", ".9rem"],
    fontWeight: "500",
    color: "secondary.700",
    ml: "auto",
  },

  "& div > span": {
    fontSize: [".9rem", ".9rem", ".9rem", "1.1rem", "1.1rem"],
  },

  "@media screen and (max-width: 360px)": {

    "& div": {
      ml: "0",
    },
  },
});

export const DealOfTheDaySecondCont = css.raw({
  mb: "3rem",
  mt: "2rem",
  justifyContent: "space-around",
  rowGap: "9rem",

  "@media screen and (max-width: 1140px)": {
    overflowX: "scroll",
    scrollBehavior: "smooth",
    scrollbar: "hidden",
    justifyContent: "flex-start",
  },

  // "@media screen and (max-width: 876px) and (min-width: 768px)": {
  //   "& > div:last-child": {
  //     display: "none",
  //   },
  // },

  // "@media screen and (max-width: 716px)": {
  //   "& > div:last-child": {
  //     display: "none",
  //   },
  // },
});

export const DealOfTheDayThirdCont = css.raw({
  justifyContent: "space-around",

  "@media screen and (max-width: 1295px)": {
    "& > section:first-child": {
      display: "none",
    },
  },

  "@media screen and (max-width: 990px)": {
    "& > section:last-child": {
      display: "none",
    },
  },

  "@media screen and (max-width: 623px)": {
    justifyContent: "start",

    "& > section:nth-child(3)": {
      display: "none",
    },
  },
});
