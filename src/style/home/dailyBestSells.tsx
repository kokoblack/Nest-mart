import { css } from "../../../styled-system/css";

export const dailyBestSellsCont = css.raw({
  w: "100%",
  boxSizing: "border-box",
  mb: "3rem",
//   overflow: 'hidden'
});

export const dailyBestSellsNature = css.raw({
  bgImage: "url(assets/div.banner-img.png)",
  pl: "2rem",
  pr: "3.5rem",
  pt: "3rem",
  pb: "10rem",
  mb: "4rem",
  w: "21rem",
  rounded: "15px",
  bgPosition: "center",
  bgSize: "cover",
  flexShrink: "0",

  "& > p": {
    fontSize: ["2rem", "2rem", "2rem", "2rem", "2.5rem"],
    color: "secondary.100",
    lineHeight: ["2.5rem", "2.5rem", "2.5rem", "2.5rem", "3rem"],
    fontWeight: "700",
    mb: ["2.5rem", "2.5rem", "2.5rem", "3.5rem", "4.55rem"],
  },

  "@media screen and (max-width: 991px)": {
    w: "11rem",
    pr: "2rem",
    pb: '7.5rem'
  },

  "@media screen and (max-width: 767px)": {
    display: 'none'
  },
});

export const dailyBestSellsCardSection = css.raw({
  w: "70%",
  overflowX: "scroll",
  scrollBehavior: "smooth",
  flexShrink: "0",
  justifyContent: "flex-start",
  alignItems: "stretch",
  mr: ".3rem",

  _scrollbar: {
    display: "none",
  },

  "@media screen and (max-width: 1273px)": {
    w: "65%",
  },

  "@media screen and (max-width: 1100px)": {
    w: "60%",
  },

  "@media screen and (max-width: 991px)": {
    w: "75%",
  },

  "@media screen and (max-width: 863px)": {
    w: "70%",
  },

  "@media screen and (max-width: 767px)": {
    w: "100%",
  },
});
