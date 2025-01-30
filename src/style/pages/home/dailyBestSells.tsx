import { css } from "../../../../styled-system/css";

export const dailyBestSellsCont = css.raw({
  w: "100%",
  boxSizing: "border-box",
  mb: "4rem",

  "@media screen and (max-width: 767px)": {
    mb: "3rem",
  },
});

export const dailyBestSellsNature = css.raw({
  bgImage: "url(assets/div.banner-img.png)",
  pl: "2rem",
  pr: "3.5rem",
  pt: "3rem",
  pb: "7.8rem",
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

  "@media screen and (max-width: 992px)": {
    display: 'none'
  },
});

export const dailyBestSellsCardSection = css.raw({
  w: "70%",
  boxSizing: "border-box",
  overflowX: "scroll",
  scrollBehavior: "smooth",
  scrollbar: "hidden",
  justifyContent: "flex-start",
  alignItems: "stretch",
  mr: ".3rem",

  "@media screen and (max-width: 992px)": {
    w: "100%",
  },
});
